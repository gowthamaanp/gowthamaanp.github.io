---
title: "Diffusion Models"
date: "2025-01-05"
read: "7 mins read"
slug: "diffusion_models"
---

I spent 2022 learning to draw and was blindsided by the rise of AI art models like Stable Diffusion. Suddenly, the computer was a better artist than I could ever hope to be.

It's been two years, and image generation with diffusion is better than ever. It's also led to breakthroughs in animation, video generation, 3D modeling, protein structure prediction, and even robot trajectory planning. Where did it come from, how does it work and where is it going?

This post collects my notes on the theory of diffusion and applications to image generation and other tasks. Readers should know some probability theory (Bayes' rule, Gaussian distributions). Examples and code using PyTorch are provided.

<h2> 1. Generative modeling </h2>

The basic problem of generative modeling is: given a set of samples from an unknown distribution $\mathbf{x} \sim p(\mathbf{x})$, we want to generate new samples from that distribution.

[Generative adversarial networks](https://poloclub.github.io/ganlab/) treat this as a game: a generator model taking a random seed is trained to fool a discriminator, which is simultaneously trained to tell real samples from the dataset from fake. GANs can [synthesize amazing images](https://thispersondoesnotexist.com/) but are notoriously hard to train. They do not explicitly model $p(\mathbf{x})$ and in practice end up incapable of generating substantial subsets of it.

A more explicit approach is to learn a deterministic, reversible mapping from the samples we have to a distribution which we know how to sample from, like the unit gaussian. Then we can sample a point from the known distribution and apply the inverse mapping to get a sample from $p(\mathbf{x})$. This is conceptually attractive and is called [normalizing flows](https://blog.evjang.com/2018/01/nf1.html). Flows have also been used for images: [OpenAI's 2018 Glow](https://openai.com/index/glow/) generated realistic images of faces with a semantically meaningful latent space.

![Normalizing flow](https://picsum.photos/200/200)

_Hover to play. Image via [Eric Jang's blog](https://blog.evjang.com/2019/07/nf-jax.html). A normalizing flow learns a deterministic, probability-density-preserving mapping between the normal distribution and a 2D dataset._

<h3> 1.1 Denoising diffusion models </h3>

What if instead of mapping data points to a normal distribution deterministically, we mapped points stochastically, by blending random noise into them?

This seems weird at first. Technically this mapping wouldn't be reversible, because a given data point could map to any point in the target space.

But suppose we were to do this over many steps, where we start with a clean data point, then blend in a small amount of noise, repeating many times until we have something that looks like pure noise.

- At any given time, looking at a single noisy datapoint, you can sort of tell where the datapoint might have been in the previous step.
- And given any point $ \mathbf{y}$ in the target space and any point $ \mathbf{x} $ in our original space, $ \mathbf{y} $ comes from $ \mathbf{x} $ with probability arbitrarily close to $ p(\mathbf{x}) $, depending on how much noise we choose to blend into our data. So if we learn to reverse the many-step process, we should be able to sample from $ p(\mathbf{x}) $. This is the idea of **denoising diffusion**.

This is like the physical process of diffusion, where a drop of ink slowly diffuses out to fill a tank by the random motion of individual ink particles.

![Forward noising step](https://picsum.photos/300/300)

_A 2D dataset being mapped to the unit gaussian over 50 noising steps. Adjust the slider or click the previews below to see it in action._

<h2> 2. DDPM </h2>

Let's take a look at the original approach, Denoising Diffusion Probabilistic Models. Newer advances build on the language and math of this paper.

<h3>2.1 Noising and de-noising </h3>

Given an input image $ \mathbf{x}\_0 $, we map it to a point in the unit normal distribution by iteratively blending noise to it in a forward diffusion process over $t=1,2,…,T$ timesteps. Each timestep generates a new image by blending in a small amount of random noise to the previous one:

$$
\mathbf{x}_t = \sqrt{\alpha_t}\mathbf{x}_{t-1} + \sqrt{1-\alpha_t}\epsilon
$$

where:

- $\epsilon \sim \mathcal{N}(0, \mathbf{I})$
- $\alpha_t$ is less than but close to $1$, and $\prod_{t=1}^T \alpha_t \approx 0$
- The terms in square roots ensure that the variance remains the same after each step.

We can write the probability density of the forward step as:

$$
q(\mathbf{x}_t | \mathbf{x}_{t-1}) := \mathcal{N}(\sqrt{\alpha*t}\mathbf{x}*{t-1}, (1 - \alpha_t)\mathbf{I})
$$

<h3> 2.2 Learning to de-noise </h3>

It turns out that $q(\mathbf{x}_{t-1} | \mathbf{x}_t)$ is approximately gaussian for very small amounts of noise. This is an old result from statistical physics. This gives us a way to learn a reverse distribution: we can estimate the parameters $\mu_\theta, \Sigma_\theta$ of a gaussian, and take the KL divergence to all of the distributions $q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0)$ for every training example $\mathbf{x}_0$.

Recall that the [KL divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence) is a metric measuring the difference between two probability distributions. It's easy to compute for us because we are computing it between two gaussians with known parameters, so it has a closed form.

![KL divergence](https://picsum.photos/200/200)

_The reverse distributions $q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}\_0^{(1)})$ and $q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}\_0^{(2)})$ conditioned on training samples $\mathbf{x}_0^{(1)},\mathbf{x}_0^{(2)}$, and the distribution $p_\theta$ that we learn by minimizing KL divergence to them.\_

<h3> 2.3 Sampling </h3>

Once we've learned a noise estimation model $ \epsilon\_\theta(\mathbf{x}\_t, t) $, we've effectively learned the reverse process. Then we can use this learned model to sample an image $ \mathbf{x}\_0 $ from the image distribution by:

1. Sampling a random noise image $x_T \sim \mathcal{N}(0, \mathbf{I})$.
2. For timesteps $t$ from $T$ to $1$:
   - Predict the noise $\hat\epsilon_t = \epsilon_\theta(\mathbf{x}_t, t)$.
   - Sample the de-noised image $\mathbf{x}_{t-1} \sim \mathcal{N}(\frac{1}{\sqrt{\alpha_t}}(\mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{1 - \bar\alpha_t}}\hat\epsilon_t), \Sigma_\theta)$.

<h2> 3. Advances </h2>

#### 3.1 Faster generation

A major disadvantage of diffusion when it was first invented was the generation speed due to the DDPM assumption that the reverse distribution is gaussian, which is only true for large $T$. Since then, many techniques to speed up generation have been developed, some of which can be used out-of-the-box on models pre-trained using the DDPM objective, while others require new models to be trained.

---

#### 3.2 Conditional generation

Given a model trained on animal images, how do I generate only cats?

In principle, it's possible to model any type of conditional probability distribution $p(\mathbf{x} | y)$ by training a diffusion model $\epsilon_\theta(\mathbf{x}_t, t, y)$ with pairs $\mathbf{x}_0, y$ from the dataset. This was done by Ho 2021, who trained a class-conditional diffusion model on ImageNet. The label $y$ can also be a text embedding, a segmentation mask, or any other conditioning information.

---

#### 3.3 Data

While not specific to diffusion, no discussion of generative models is complete without mentioning the data they were trained on. This section will cover data used for image generation models.

---

### 4. Beyond images

#### 4.1 Audio, video, and 3D

[Riffusion](https://github.com/riffusion/riffusion) was an early music generation model capable of generating twelve-second long songs, notable because it was made by fine-tuning Stable Diffusion to output spectrogram images. [Sonauto](https://sonauto.ai/) is a more recent and controllable model built on [diffusion transformers](https://arxiv.org/abs/2212.09748), capable of generating 1:35-long songs with coherent lyrics.

---

#### 4.2 Life sciences

Diffusion models are finding many applications in medicine and biology. For example, performing partial CT and MRI scans greatly reduces patient exposure to radiation and increases comfort, but is challenging because it requires reconstructing full scans from partial data. Diffusion models have advanced the state-of-the-art in medical image reconstruction, providing superior performance and generalization to supervised methods.

---

#### 4.3 Robotics

To interact with the real world, robots must be capable of a huge range of physical behaviors. Traditional approaches to get robots to do things like open doors or tie shoelaces involves explicitly programming numerous edge cases and ways to recover from them. While this works for controlled settings like factories, it does not scale.
