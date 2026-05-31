"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] animate-fade-in flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Something went wrong
      </h1>
      <p className="mt-4 text-surface-500 dark:text-surface-400">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-xl border border-border/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent-400/30 hover:bg-accent-400/[0.02]"
      >
        Try again
      </button>
    </div>
  );
}
