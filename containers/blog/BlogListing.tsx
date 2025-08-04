"use client";
import { SectionWrapper } from "@/components/common";
import { blogsListIngData } from "@/constants/blog/blogListingData";
import BlogIListingtem from "./BlogIListingtem";

const BlogListing = () => {
  return (
    <SectionWrapper>
      <div className="space-y-8">
        {blogsListIngData.map((blogsListing, index) => (
          <BlogIListingtem blogItem={blogsListing} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default BlogListing;
