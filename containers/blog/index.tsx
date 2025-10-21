import {
  PageName,
  ParagraphWrapper,
  SectionWrapper,
} from "@/components/common";
import Layout from "@/components/Layout";
import BlogListing from "./BlogListing";

const Blog = () => {
  return (
    <Layout>
      <SectionWrapper>
        <div className="space-y-6">
          <PageName label="Blog" />
          <ParagraphWrapper>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This blog is my space to dissect ideas, break down research, and
              explore ML literature.
            </p>
          </ParagraphWrapper>
        </div>
      </SectionWrapper>
      <BlogListing />
    </Layout>
  );
};

export default Blog;
