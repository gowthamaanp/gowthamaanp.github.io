import { PageName, PageSubHeading } from "@/components/common";
import Layout from "@/components/Layout";
import ProjectsListing from "./ProjectListing";

const Projects = () => {
  return (
    <Layout>
      <div className="mt-5 mb-10">
        <PageName label="Projects" />
      </div>
      <ProjectsListing />
    </Layout>
  );
};

export default Projects;
