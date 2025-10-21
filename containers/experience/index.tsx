import { PageName } from "@/components/common";
import ExperienceListing from "./ExperienceListing";

const Experience = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-3 md:mb-5">
      <PageName label="Experience" />
      <ExperienceListing />
    </div>
  );
};

export default Experience;
