"use client";
import { SectionWrapper } from "@/components/common";
import { projectsData } from "@/constants/projects";
import ProjectListingItem from "./ProjectIListingtem";

const ProjectsListing = () => {
  return (
    <SectionWrapper>
      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <ProjectListingItem project={project} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsListing;
