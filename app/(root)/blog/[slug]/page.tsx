import { notFound } from "next/navigation";
import { getBlogContentBySlug } from "@/utils/mdxUtils";
import Layout from "@/components/Layout";
import { BlogHeading } from "@/components/common/BlogHeading";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogContentBySlug(slug);

  if (!blog) {
    return notFound();
  }

  const { content } = blog;
  const { title, date, read } = blog.meta;

  return (
    <Layout>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
        integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
        crossOrigin="anonymous"
      />
      <BlogHeading heading={title} date={date} read={read} />
      <article className="prose prose-base dark:prose-invert max-w-none text-foreground dark:text-foreground">
        {content}
      </article>
    </Layout>
  );
}
