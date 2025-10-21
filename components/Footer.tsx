import { socials } from "@/constants/Social";
import { ISocial } from "@/interface/Social";
import { LinkWrapper } from "./common";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-3xl px-4 md:px-0 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex flex-row gap-4">
            {socials.map(({ label, icon, href }: ISocial) => (
              <div key={`footer-social-${label}`}>
                <LinkWrapper linkIcon={icon} href={href} />
              </div>
            ))}
          </div>

          {/* Copyright and Credits */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} Gowthamaan Palani. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
