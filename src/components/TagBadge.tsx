import Link from "next/link";

export function TagBadge({ tag, active }: { tag: string; active?: boolean }) {
  return (
    <Link
      href={`/blog?tag=${encodeURIComponent(tag)}`}
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all ${
        active
          ? "bg-accent-400/20 text-accent-300 ring-1 ring-accent-400/40"
          : "bg-surface-200 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:bg-surface-300 dark:hover:bg-surface-700 hover:text-surface-700 dark:hover:text-surface-200"
      }`}
    >
      {tag}
    </Link>
  );
}
