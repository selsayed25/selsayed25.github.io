import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] animate-fade-in flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold tracking-tight text-accent-400">404</h1>
      <p className="mt-4 text-lg text-surface-500 dark:text-surface-400">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl border border-border/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent-400/30 hover:bg-accent-400/[0.02]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
          <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
        </svg>
        Go home
      </Link>
    </div>
  );
}
