import { DivWBorderWrapper, LinkWrapper, Tag } from "@/components/common";
import { IBlogListingData } from "@/interface/blog";
import { colorMap } from "@/utils/colormap";
import getFormattedDate from "@/utils/utils";
import Link from "next/link";

interface IBlogListingItemProps {
  blogItem: IBlogListingData;
}

const BlogListingItem: React.FC<IBlogListingItemProps> = ({ blogItem }) => {
  const { id, title, slug, description, date, modified, tags, read } = blogItem;
  const formattedDate = getFormattedDate(date);

  return (
    <DivWBorderWrapper className="flex flex-col gap-2">
      <Link className="font-semibold text-lg" href={`/blog/${slug}`}>
        {title}
      </Link>
      <p className="text-sm">
        {formattedDate} - {read}
      </p>
      <p className="text-base">{description}</p>

      <div aria-label="tags" className="space-x-2 flex flex-wrap">
        {tags.map((tag, i) => (
          <Tag
            label={tag}
            tagProps={{
              style: {
                borderColor: colorMap["keyword"],
                borderWidth: "1.5px",
              },
            }}
            key={`exp-${tag}-tag-${i}`}
          />
        ))}
      </div>
    </DivWBorderWrapper>
  );
};

export default BlogListingItem;
