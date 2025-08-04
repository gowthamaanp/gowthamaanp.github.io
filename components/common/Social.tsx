import {
  LinkWrapper,
  ListWrapper,
  SectionHeading,
  SectionWrapper,
} from "@/components/common";
import { socials } from "@/constants/Social";
import { ISocial } from "@/interface/Social";

const Social = () => (
  <div className="flex flex-row gap-4">
    {socials.map(({ label, icon, href }: ISocial) => (
      <div key={`social-${label}`}>
        <>
          <LinkWrapper linkIcon={icon} href={href}></LinkWrapper>
        </>
      </div>
    ))}
  </div>
);

export default Social;
