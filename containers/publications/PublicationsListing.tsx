"use client";
import { SectionWrapper } from "@/components/common";
import { projectsData } from "@/constants/projects";
import PublicationsListingItem from "./PublicationsListingItem";

const PublicationsListing = () => {
  return (
    <SectionWrapper>
      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <PublicationsListingItem publications={project} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PublicationsListing;
