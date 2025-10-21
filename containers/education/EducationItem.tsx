import { IEducation } from "@/interface/education";
import Image from "next/image";
import { LinkWrapper, ListWrapper } from "@/components/common";

const EducationItem = ({
  degree,
  institution,
  period,
  details,
  logo,
  link,
}: IEducation) => {
  return (
    <div className="flex gap-4 my-4">
      {logo && (
        <div className="relative w-24 h-24">
          <Image
            src={logo}
            alt={`${institution} logo`}
            width={100}
            height={100}
          />
        </div>
      )}
      <div className="flex-1">
        <LinkWrapper
          href={link}
          target="_blank"
          className="text-lg font-medium mb-3 underline underline-offset-4 hover:decoration-dotted"
        >
          {institution}
        </LinkWrapper>
        <p className="font-semibold">{degree}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{period}</p>
        <ListWrapper>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ListWrapper>
      </div>
    </div>
  );
};

export default EducationItem;
