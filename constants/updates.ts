import { IUpdate } from "@/interface/updates";

export const updates: IUpdate[] = [
  {
    id: 1,
    type: "paper",
    title: "MDFN: Efficient Image Super-Resolution through Multi-Domain Feature Fusion",
    description: " Multi-Domain Feature Network (MDFN), a novel and resource-efficient architecture for single image super-resolution that synergistically fuses features from three complementary domains: The Spatial Domain (using convolutions for local textures), the Multi-Scale Domain (using a Laplacian pyramid for hierarchical features), and the Frequency Domain (using Fourier transforms for global context). ",
    date: "December 17, 2025",
    venue: "ICVGIP 2025",
    link: "https://icvgip.in/",
    status: "accepted",
  },
  {
    id: 2,
    type: "blog",
    title: "How I made my Blog website load in 0.3 seconds",
    description: "Exploring Next.js 14 advanced features including SSR, SSG, ISR, and Image Optimization for optimal performance",
    date: "January 1, 2024",
    link: "/blog/standing_invitation",
  }
];

