import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import rehypeStringify from "rehype-stringify";
import { rehypeImage } from "./rehypeImage";

export async function renderMarkdownToHtml(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeImage, { lazyLoad: true })
    .use(rehypeKatex)
    .use(rehypePrism)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return String(result);
}
