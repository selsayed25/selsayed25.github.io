import { notFound } from "next/navigation";
import { getPost, getAllPosts } from "@/lib/posts";
import { renderMarkdownToHtml } from "@/lib/renderMarkdown";
import { MDXContent } from "@/components/MDXContent";
import { TagBadge } from "@/components/TagBadge";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const html = await renderMarkdownToHtml(post.content);

  return (
    <article className="animate-fade-in">
      <div className="mb-8">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-1 text-sm text-surface-500 dark:text-surface-400 transition-colors hover:text-accent-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
          </svg>
          Back to posts
        </Link>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <time className="text-sm text-surface-500 dark:text-surface-400">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>

        {post.description && (
          <p className="mt-4 text-lg text-surface-500 dark:text-surface-400">{post.description}</p>
        )}
      </div>

      <MDXContent html={html} />
    </article>
  );
}
