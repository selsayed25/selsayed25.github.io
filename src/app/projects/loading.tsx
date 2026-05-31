export default function ProjectsLoading() {
  return (
    <div className="animate-fade-in py-8">
      <div className="h-9 w-40 rounded-lg bg-surface-200 dark:bg-surface-800" />
      <div className="mt-2 h-5 w-64 rounded-lg bg-surface-200 dark:bg-surface-800" />

      <div className="mt-8 flex gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-7 w-20 rounded-full bg-surface-200 dark:bg-surface-800" />
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-border/50 p-5"
          >
            <div className="h-5 w-1/2 rounded-lg bg-surface-200 dark:bg-surface-800" />
            <div className="mt-2 h-4 w-full rounded-lg bg-surface-200 dark:bg-surface-800" />
            <div className="mt-1 h-4 w-2/3 rounded-lg bg-surface-200 dark:bg-surface-800" />
            <div className="mt-3 flex gap-1.5">
              <div className="h-5 w-16 rounded-full bg-surface-200 dark:bg-surface-800" />
              <div className="h-5 w-20 rounded-full bg-surface-200 dark:bg-surface-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
