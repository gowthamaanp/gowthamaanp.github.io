import { PageName } from "@/components/common";
import EducationListing from "./EducationListing";

const Education = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-3 md:mb-5">
      <PageName label="Education" />
      <EducationListing />
    </div>
  );
};

export default Education;
