export default function IconDetailSkeleton() {
  return (
    <div className="lg:w-[90%] w-full max-w-5xl mx-auto px-4 py-8 animate-pulse">
      {/* Back Button Skeleton */}
      <div className="h-6 w-24 bg-neutral-200 dark:bg-neutral-800 rounded-lg mb-8" />

      <div className="flex flex-col lg:flex-row gap-12 items-start mb-12">
        {/* Icon Preview Box Skeleton */}
        <div className="w-full lg:w-1/3 aspect-square rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800" />

        <div className="flex-1 w-full space-y-6">
          <div className="space-y-3">
            <div className="h-10 w-48 bg-neutral-200 dark:bg-neutral-800 rounded-xl" />
            <div className="h-6 w-32 bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
          </div>

          <div className="h-16 w-full rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800" />
          
          <div className="grid grid-cols-2 gap-4">
             <div className="h-20 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/30" />
             <div className="h-20 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/30" />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-8 w-40 bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
          <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        {/* Code Editor Skeleton */}
        <div className="h-64 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/30" />
      </div>
    </div>
  );
}
