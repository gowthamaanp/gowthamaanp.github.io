import { education } from "@/constants/education";
import EducationItem from "./EducationItem";
import { IEducation } from "@/interface/education";

const EducationListing = () => {
  return (
    <div>
      {education.map((edu: IEducation, index: number) => (
        <EducationItem
          key={`education-${index}`}
          degree={edu.degree}
          institution={edu.institution}
          period={edu.period}
          details={edu.details}
          logo={edu.logo}
          link={edu.link}
        />
      ))}
    </div>
  );
};

export default EducationListing;
