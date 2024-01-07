import React from "react";

function FriendsSkeletonVertical() {
  return (
    <div className="animate-pulse">
      <h2 className="text-lg text-slate-900 tracking-wider w-12 h-4 bg-slate-100"></h2>
      <div className="flex flex-col pt-6 gap-2">
        {[1, 2, 3].map((user) => (
          <div
            key={user}
            className="flex flex-row gap-2 pb-4 items-center animate-pulse"
          >
            <div>
              <div className="w-8 h-8 rounded-full animate-pulse bg-slate-300"></div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold w-16 h-3 bg-slate-200"></div>
              <p className="text-xs w-20 h-2 bg-slate-200"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { FriendsSkeletonVertical };
