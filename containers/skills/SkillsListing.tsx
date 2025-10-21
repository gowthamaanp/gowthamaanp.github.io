import { skillCategories } from "@/constants/skills";
import SkillCategory from "./SkillCategory";
import { ISkillCategory } from "@/interface/skills";

const SkillsListing = () => {
  return (
    <div className="w-full max-w-6xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category: ISkillCategory, index: number) => (
          <SkillCategory
            key={`skill-category-${index}`}
            category={category.category}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsListing;
