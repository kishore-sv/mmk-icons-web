export default function IconLoadingSkeleton() {
  return (
    <div className="lg:w-[80%] w-[100%] animate-pulse">
      <div className="h-9 w-32 bg-neutral-200 dark:bg-neutral-800 rounded-lg mb-4" />
      <div className="h-5 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded-lg mb-2" />
      <div className="h-5 w-1/2 bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
      
      <div className="border-b border-neutral-500/20 mb-4 mt-6" />

      <div className="w-full flex gap-5 flex-wrap">
        {[...Array(24)].map((_, index) => (
          <div
            key={index}
            className="flex w-[45%] md:w-[20%] lg:w-1/6 flex-col gap-3 justify-center rounded-xl items-center bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200/50 dark:border-neutral-800/50 px-2 py-6"
          >
            <div className="w-12 h-12 rounded-lg bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-20 bg-neutral-200 dark:bg-neutral-800 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
