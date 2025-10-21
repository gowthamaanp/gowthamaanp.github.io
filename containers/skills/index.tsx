import { PageName } from "@/components/common";
import SkillsListing from "./SkillsListing";

const Skills = () => {
  return (
    <div className="flex flex-col items-center gap-6 mb-6 md:mb-8">
      <PageName label="Skills" />
      <SkillsListing />
    </div>
  );
};

export default Skills;
