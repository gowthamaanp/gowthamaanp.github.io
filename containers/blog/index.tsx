import { PageName } from "@/components/common";
import Layout from "@/components/Layout";
import BlogListing from "./BlogListing";

const Blog = () => {
  return (
    <Layout>
      <div>
        <PageName label="Blog" />
      </div>
      <BlogListing />
    </Layout>
  );
};

export default Blog;
