"use client";

import Footer from "./Footer";
import { Header } from "./Header";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Layout: React.FC<{
  children: React.ReactNode;
  sectionProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
}> = ({ children, sectionProps }) => {
  const pathname = usePathname();
  const isRoot = pathname === "/";
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Header />
      <motion.div
        className="text-foreground dark:text-foreground min-h-screen bg-background dark:bg-background flex flex-col"
        aria-label="main-content"
        initial="pageInitial"
        animate="pageAnimate"
        exit={{ opacity: 0 }}
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              type: "tween",
              duration: 1,
            },
          },
        }}
      >
        <main
          className={`container mx-auto py-10 pb-20 max-w-3xl w-full flex-grow flex flex-col gap-8 px-4 md:px-0 relative transition-opacity duration-500 ease-in-out ${
            isMounted ? "opacity-100" : "opacity-0"
          }`}
          {...sectionProps}
        >
          {children}
        </main>

        {!isRoot && <Footer />}
      </motion.div>
    </>
  );
};

export default Layout;
