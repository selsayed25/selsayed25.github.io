export default function PostLoading() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="h-4 w-24 rounded-lg bg-surface-200 dark:bg-surface-800" />
        <div className="mt-4 h-10 w-3/4 rounded-lg bg-surface-200 dark:bg-surface-800" />
        <div className="mt-4 flex gap-2">
          <div className="h-4 w-32 rounded-lg bg-surface-200 dark:bg-surface-800" />
          <div className="h-5 w-16 rounded-full bg-surface-200 dark:bg-surface-800" />
          <div className="h-5 w-20 rounded-full bg-surface-200 dark:bg-surface-800" />
        </div>
        <div className="mt-4 h-5 w-full rounded-lg bg-surface-200 dark:bg-surface-800" />
      </div>

      <div className="space-y-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 rounded-lg bg-surface-200 dark:bg-surface-800 ${
              i % 3 === 0 ? "w-3/4" : i % 3 === 1 ? "w-full" : "w-5/6"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
