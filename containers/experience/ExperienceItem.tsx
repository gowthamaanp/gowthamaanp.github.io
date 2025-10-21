import { IExperience } from "@/interface/experience";
import Image from "next/image";
import { LinkWrapper, ListWrapper, Tag } from "@/components/common";

const ExperienceItem = ({
  title,
  company,
  period,
  location,
  description,
  logo,
  link,
  tags,
}: IExperience) => {
  return (
    <div className="flex gap-4 my-4">
      {logo && (
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image src={logo} alt={`${company} logo`} width={100} height={100} />
        </div>
      )}
      <div className="flex-1">
        <LinkWrapper
          href={link}
          target="_blank"
          className="text-lg font-medium font-poppins mb-1 underline underline-offset-4 hover:decoration-dotted"
        >
          {company}
        </LinkWrapper>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {period} • {location}
        </p>
        <ListWrapper>
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ListWrapper>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
