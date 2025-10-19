import {
  DivWBorderWrapper,
  LinkWrapper,
  ListWrapper,
  Tag,
} from "@/components/common";
import { IPublications } from "@/interface/publications";
import Image from "next/image";

interface IPublictionItemProps {
  publications: IPublications;
}

const PublicationsListingItem: React.FC<IPublictionItemProps> = ({
  publications,
}) => {
  const { tags, tagBgColors, code, preview, title, description, thumbnail } =
    publications;

  return (
    <DivWBorderWrapper>
      <p
        className="project-title text-base font-medium font-poppins"
        aria-label={title}
      >
        {title}
      </p>
      <div aria-label="links" className="space-x-4 text-[0.8125rem]">
        {code && <LinkWrapper href={code}>Code</LinkWrapper>}
        {preview && <LinkWrapper href={preview}>Preview</LinkWrapper>}
      </div>
      <div className="py-2">
        <ListWrapper>
          {description.map((item, index) => (
            <li
              key={`p${index}list-${index}`}
              dangerouslySetInnerHTML={{ __html: item }}
            ></li>
          ))}
        </ListWrapper>
      </div>

      <div aria-label="tags" className="space-x-2 flex flex-wrap">
        {tags.map((tag, i) => (
          <Tag
            label={tag}
            tagProps={{
              style: {
                borderColor: tagBgColors[i],
                borderWidth: "1.5px",
              },
            }}
            key={`proTag-${tag}`}
          />
        ))}
      </div>
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={title}
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-48 transition-opacity duration-1000"
          priority
        />
      )}
    </DivWBorderWrapper>
  );
};

export default PublicationsListingItem;
