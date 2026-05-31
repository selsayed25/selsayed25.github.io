import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { TagBadge } from "@/components/TagBadge";

export const dynamic = 'force-static';

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag: activeTag } = await searchParams;
  const posts = getAllPosts();
  const allTags = getAllTags();

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <div className="animate-fade-in">
      <section className="py-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Writing</h1>
        <p className="mt-2 text-surface-500 dark:text-surface-400">
          Thoughts on math, engineering, and debate.
        </p>
      </section>

      <section className="py-4">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blog"
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all ${
              !activeTag
                ? "bg-accent-400/20 text-accent-300 ring-1 ring-accent-400/40"
                : "bg-surface-200 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:bg-surface-300 dark:hover:bg-surface-700 hover:text-surface-700 dark:hover:text-surface-200"
            }`}
          >
            All
          </Link>
          {allTags.map((tag) => (
            <TagBadge key={tag} tag={tag} active={activeTag === tag} />
          ))}
        </div>
      </section>

      <section className="py-8">
        {filtered.length === 0 ? (
          <p className="text-surface-500 dark:text-surface-400">No posts found with this tag.</p>
        ) : (
          <div className="space-y-6">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-border/50 p-5 transition-all hover:border-accent-400/30 hover:bg-accent-400/[0.02]"
              >
                <article>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h2 className="text-lg font-semibold text-surface-700 dark:text-surface-200 transition-colors group-hover:text-accent-400">
                        {post.title}
                      </h2>
                      <p className="mt-1.5 text-sm text-surface-500 dark:text-surface-400 line-clamp-2">
                        {post.description}
                      </p>
                      {post.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full bg-surface-200 dark:bg-surface-800 px-2 py-0.5 text-xs text-surface-500 dark:text-surface-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <time className="shrink-0 text-sm text-surface-400 dark:text-surface-500">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
