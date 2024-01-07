export function AboutSkeleton() {
  return (
    <div className="flex flex-row gap-2 pb-4 items-center animate-pulse">
      <div>
        <div className="w-12 h-12 rounded-full animate-pulse bg-slate-300"></div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold w-16 h-4 bg-slate-200"></div>
        <p className="text-xs w-20 h-2 bg-slate-200"></p>
      </div>
    </div>
  );
}
