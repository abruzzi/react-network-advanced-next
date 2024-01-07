export function AboutSkeleton() {
  return (
    <div className="flex flex-row gap-2 pb-4 items-center animate-pulse">
      <div>
        <div className="w-12 h-12 rounded-full animate-pulse bg-slate-700"></div>
      </div>
      <div>
        <div className="text-2xl font-bold w-12"></div>
        <p className="text-xs w-20"></p>
      </div>
    </div>
  );
}
