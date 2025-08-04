import Layout from "@/components/Layout";
import Experience from "./Experience";
import { experiencesItems } from "@/constants/experience";
import Education from "./Education";
import { educationItems } from "@/constants/education";
import Social from "@/components/common/Social";
import Profile from "@/components/common/Profile";

const About = () => {
  return (
    <Layout>
      <Education educations={educationItems} />
      <Experience experiences={experiencesItems} />
      <Social />
    </Layout>
  );
};

export default About;
