export default function BlogLoading() {
  return (
    <div className="animate-fade-in py-8">
      <div className="h-9 w-32 rounded-lg bg-surface-200 dark:bg-surface-800" />
      <div className="mt-2 h-5 w-72 rounded-lg bg-surface-200 dark:bg-surface-800" />

      <div className="mt-8 flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-7 w-16 rounded-full bg-surface-200 dark:bg-surface-800" />
        ))}
      </div>

      <div className="mt-8 space-y-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-border/50 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="h-5 w-3/4 rounded-lg bg-surface-200 dark:bg-surface-800" />
                <div className="mt-2 h-4 w-full rounded-lg bg-surface-200 dark:bg-surface-800" />
                <div className="mt-1 h-4 w-1/2 rounded-lg bg-surface-200 dark:bg-surface-800" />
              </div>
              <div className="h-4 w-20 rounded-lg bg-surface-200 dark:bg-surface-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
