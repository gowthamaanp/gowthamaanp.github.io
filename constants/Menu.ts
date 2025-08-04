import { IMenuItems } from "@/interface/Menu";

export const menuItems: IMenuItems[] = [
  {
    href: "/",
    src: "/assets/svg/home.svg",
    name: "Home",
    color: "#b2b2b2",
  },
  {
    href: "/standing-invitation",
    src: "/assets/svg/standing-invitation.svg",
    name: "Standing Invitation",
    color: "#b2b2b2",
  },
  // {
  //   href: "/blog",
  //   src: "/assets/svg/blog.svg",
  //   name: "Blog",
  //   color: "#b2b2b2",
  // },
  {
    href: "/projects",
    src: "/assets/svg/projects.svg",
    name: "Projects",
    color: "#b2b2b2",
  },
  {
    onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    src: "/assets/svg/scrolltop.svg",
    name: "Scroll to top",
    color: "#b2b2b2",
  },
];
