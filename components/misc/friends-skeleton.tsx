import React from "react";

function FriendsSkeleton() {
  return (
    <div className="py-4 animate-pulse">
      <h2 className="text-lg text-slate-900 tracking-wider w-12 h-3 bg-slate-100"></h2>
      <div className="flex flex-row pt-4 gap-6">
        {[1, 2, 3].map((user) => (
          <div key={user} className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-slate-300"></div>
            <span className="text-xs w-12 h-2 text-slate-700 bg-slate-200"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export { FriendsSkeleton };
