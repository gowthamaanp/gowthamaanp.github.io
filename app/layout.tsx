import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Outfit } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Gowthamaan Palani",
  description: "Gowthamaan Palani's Protfolio Website",
  other: {
    "color-scheme": "only light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable}  ${poppins.variable} font-outfit antialiased overflow-x-hidden bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
