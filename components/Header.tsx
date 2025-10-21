"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { iconLibrary } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

const routes = [
  {
    href: "/",
    name: "Home",
    icon: "home",
    showLabel: false,
  },
  {
    href: "/projects",
    name: "Projects",
    icon: "projector",
    showLabel: true,
  },
  {
    href: "/blog",
    name: "Blog",
    icon: "book",
    showLabel: true,
  },
  {
    href: "/attic",
    name: "Attic",
    icon: "newspaper",
    showLabel: true,
  },
];

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Fixed Header */}
      <header className="fixed top-0 right-0 left-0 z-50 px-4 py-3 bg-white dark:bg-[#0a0a0a]">
        <nav className="border-2 border-gray-300 dark:border-gray-600 rounded-full shadow-lg px-2 py-1.5 max-w-fit mx-auto bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-1">
            {routes.map((route, index) => {
              const isActive =
                pathname === route.href ||
                (route.href !== "/" && pathname.startsWith(route.href));
              const Icon = iconLibrary[route.icon as keyof typeof iconLibrary];

              return (
                <div key={route.href} className="flex items-center gap-1">
                  {index > 0 && (
                    <div className="w-px h-5 bg-gray-400 dark:bg-gray-500" />
                  )}
                  <Link
                    href={route.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white font-medium shadow-sm"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
                    }`}
                    title={route.name}
                  >
                    <Icon className="w-[18px] h-[18px]" />
                    {route.showLabel && (
                      <span className="text-sm">{route.name}</span>
                    )}
                  </Link>
                </div>
              );
            })}
            <div className="w-px h-5 bg-gray-400 dark:bg-gray-500" />
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </>
  );
};
