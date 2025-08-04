import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { IBlogPost } from "@/interface/blog";
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import { createElement } from "react";

export async function getBlogContentBySlug(
  slug: string
): Promise<IBlogPost | undefined> {
  try {
    const filePath = path.join(process.cwd(), "constants/blog", `${slug}.md`);
    const rawMDX = await fs.readFile(filePath, "utf-8");

    try {
      const { content, frontmatter } = await compileMDX<{
        title: string;
        slug: string;
        date: string;
        read: string;
      }>({
        source: rawMDX,
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            rehypePlugins: [
              rehypeHighlight,
              rehypeSlug,
              rehypeKatex,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
            ],
            remarkPlugins:[
              remarkMath
            ],
          },
        },
      });

      return {
        meta: {
          title: frontmatter.title,
          slug: frontmatter.slug,
          date: frontmatter.date,
          read: frontmatter.read,
        },
        content,
      };
    } catch (mdxError) {
      console.error(`MDX Compilation Error for ${slug}:`, mdxError);
    }
  } catch (error) {
    console.error(`Error processing blog post ${slug}:`, error);
    return undefined;
  }
}