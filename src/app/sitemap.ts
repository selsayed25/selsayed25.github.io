import { getAllPosts } from "@/lib/posts";

export default async function sitemap() {
  const posts = getAllPosts();
  const blogEntries = posts.map((post) => ({
    url: `https://selsayed25.github.io/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://selsayed25.github.io/",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: "https://selsayed25.github.io/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://selsayed25.github.io/projects",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...blogEntries,
  ];
}
