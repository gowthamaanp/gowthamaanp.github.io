import Layout from "@/components/Layout";
import { socials } from "@/constants/Social";
import { ISocial } from "@/interface/Social";
import {
  LinkWrapper,
  PageName,
  ParagraphWrapper,
  SectionWrapper,
} from "@/components/common";
import Publications from "@/components/publication";
import Education from "@/containers/education";
import Experience from "@/containers/experience";
import Skills from "@/containers/skills";
import LatestUpdates from "@/components/LatestUpdates";
import Image from "next/image";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center -mt-16">
        <SectionWrapper>
          <ParagraphWrapper>
            <div className="flex flex-col items-center gap-5 mb-3 md:mb-5">
              <Image
                src="/assets/jpg/image_dp.jpg"
                alt="display-picture"
                width={250}
                height={250}
                priority
                className="rounded-full aspect-square object-cover"
              />
              <p
                style={{ lineHeight: "normal" }}
                className="text-foreground dark:text-foreground text-2xl sm:text-3xl md:text-[40px] font-semibold"
              >
                Gowthamaan Palani
              </p>
              <div className="text-center">
                MS@IIT Madras | Graduate Research in Computer Vision and Medical
                Image Analysis |{" "}
                <LinkWrapper
                  href="https://ed.iitm.ac.in/~gankrish/"
                  target="_blank"
                >
                  MiRL@IITM
                </LinkWrapper>
              </div>

              <div className="text-center">
                I'm always excited to connect, collaborate, or chat about
                research, code, or books - check out my{" "}
                <LinkWrapper
                  href="/standing-invitation"
                  target="_self"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
                >
                  Standing Invitation
                </LinkWrapper>
                , if you'd like to grab a (virtual) coffee
              </div>
              <div className="flex flex-row gap-4">
                {socials.map(({ label, icon, href }: ISocial) => (
                  <div key={`social-${label}`}>
                    <>
                      <LinkWrapper linkIcon={icon} href={href}></LinkWrapper>
                    </>
                  </div>
                ))}
              </div>
            </div>
          </ParagraphWrapper>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <div className="flex flex-col items-center gap-5 mb-3 md:mb-5">
          <PageName label="Latest Updates" />
          <LatestUpdates />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex flex-col items-center gap-5 mb-3 md:mb-5">
          <PageName label="Publications" />
          <Publications />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <Education />
      </SectionWrapper>

      <SectionWrapper>
        <Experience />
      </SectionWrapper>

      <SectionWrapper>
        <Skills />
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex items-center justify-center text-center">
          <p>
            Have a project, an idea, or just want to say hello? - check my{" "}
            <LinkWrapper
              href="/standing-invitation"
              target="_self"
              className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
            >
              Standing Invitation
            </LinkWrapper>
          </p>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Home;
