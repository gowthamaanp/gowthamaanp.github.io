import { experiences } from "@/constants/experience";
import ExperienceItem from "./ExperienceItem";
import { IExperience } from "@/interface/experience";

const ExperienceListing = () => {
  return (
    <div>
      {experiences.map((exp: IExperience, index: number) => (
        <ExperienceItem
          key={`experience-${index}`}
          title={exp.title}
          company={exp.company}
          period={exp.period}
          location={exp.location}
          description={exp.description}
          logo={exp.logo}
          link={exp.link}
          tags={exp.tags}
        />
      ))}
    </div>
  );
};

export default ExperienceListing;
