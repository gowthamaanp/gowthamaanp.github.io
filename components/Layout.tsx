"use client";

import Footer from "./Footer";
import Menus from "./Menu";
import { motion } from "framer-motion";

const Layout: React.FC<{
  children: React.ReactNode;
  sectionProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
}> = ({ children, sectionProps }) => (
  <>
    <motion.div
      className="text-black min-h-screen"
      aria-label="main-content"
      initial="pageInitial"
      animate="pageAnimate"
      exit={{ opacity: 0, backgroundColor: "#000" }}
      variants={{
        pageInitial: {
          opacity: 0,
          backgroundColor: "#000",
        },
        pageAnimate: {
          opacity: 1,
          backgroundColor: "#FFF",
          transition: {
            type: "tween",
            duration: 1,
          },
        },
      }}
    >
      <main
        className="container mx-auto py-10 pb-20 max-w-3xl w-full min-h-fit flex flex-col gap-8 px-4 md:px-0 relative"
        {...sectionProps}
      >
        {children}
      </main>

      {/* <Footer /> */}
    </motion.div>
    <Menus />
  </>
);

export default Layout;
