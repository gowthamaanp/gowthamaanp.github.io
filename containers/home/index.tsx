import Layout from "@/components/Layout";
import AboutMe from "./AboutMe";
import Social from "@/components/common/Social";
import { PageName } from "@/components/common/PageName";

const Home = () => {
  return (
    <Layout>
      <PageName label="Gowthamaan Palani" />
      <AboutMe />
      <Social />
    </Layout>
  );
};

export default Home;
