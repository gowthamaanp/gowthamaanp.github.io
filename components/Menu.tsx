"use client";

import { menuItems } from "@/constants/Menu";
import { IMenuItems } from "@/interface/Menu";
import Image from "next/image";
import Link from "next/link";

const MenuItem: React.FC<IMenuItems> = ({
  src,
  name,
  color,
  href,
  onClick,
}) => {
  const commonClasses =
    "flex justify-center items-center rounded-full w-11 h-11";

  const commonProps = {
    title: name,
    "aria-label": name,
    className: `${commonClasses}${!href ? " cursor-pointer" : ""}`,
    style: { backgroundColor: color },
  };

  const imageElement = <Image src={src} alt={name} width={22} height={22} />;

  return href ? (
    <Link href={href} {...commonProps}>
      {imageElement}
    </Link>
  ) : (
    <p onClick={onClick} {...commonProps}>
      {imageElement}
    </p>
  );
};

const Menus = () => (
  <div
    className="fixed bottom-5 right-5 flex justify-center items-center flex-col gap-2"
    aria-label="menu"
  >
    {menuItems.map(({ color, href, name, src, onClick }: IMenuItems) => (
      <MenuItem
        href={href}
        onClick={onClick}
        src={src}
        name={name}
        color={color}
        key={name}
      />
    ))}
  </div>
);

export default Menus;
