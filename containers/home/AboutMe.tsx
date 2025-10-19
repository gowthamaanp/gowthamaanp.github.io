import {
  LinkWrapper,
  ParagraphWrapper,
  SectionWrapper,
} from "@/components/common";
import Image from "next/image";

const AboutMe = () => (
  <SectionWrapper>
    <ParagraphWrapper>
      <div className="flex flex-col md:flex-row items-center gap-5 mb-3 md:mb-5">
        <p>
          I’m an MS student at IIT Madras, diving deep into Computer Vision and
          Medical Image Analysis. I wrestle with research papers and algorithms
          and eager to share what I learn along the way. This blog is my space
          to dissect ideas, break down research, and explore what makes models
          tick—not just how they work, but why they work. I love digging into
          the nuances of algorithms, and sparking ideas for future research. If
          you’re as passionate about the "aha!" moments in AI as I am, you’re in
          the right place.
        </p>
        <Image
          src="/assets/jpg/image_dp.jpg"
          alt="display-picture"
          width={200}
          height={200}
          priority
          className="rounded-full aspect-square object-cover"
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        I’m always excited to connect, collaborate, or chat about research,
        code, or anything at the intersection of vision and healthcare - check
        out my{" "}
        <LinkWrapper href="/standing-invitation" target="_self">
          Standing Invitation
        </LinkWrapper>
        , if you’d like to grab a (virtual) coffee
      </div>
    </ParagraphWrapper>
  </SectionWrapper>
);

export default AboutMe;
