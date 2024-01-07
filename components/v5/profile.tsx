import { Suspense } from "react";
import { Friends } from "@/components/v5/friends";
import { UserInfo } from "@/components/v5/userInfo";

import { UserInfoSkeleton } from "@/components/misc/user-info-skeleton";
import { FriendsSkeletonVertical } from "@/components/misc/friends-skeleton-vertical";

export async function Profile({ id }: { id: string }) {
  return (
    <div className="max-w-3xl m-auto my-4 text-slate-800">
      <h1 className="text-4xl py-4 mb-4 tracking-wider font-bold">Profile</h1>
      <div className="flex flex-row gap-2 w-full">
        <div className="p-6 basis-3/4">
          <Suspense fallback={<UserInfoSkeleton />}>
            <UserInfo id={id} />
          </Suspense>
        </div>
        <div className="rounded border p-4 border-slate-300 basis-1/4 h-64">
          <Suspense fallback={<FriendsSkeletonVertical />}>
            <Friends id={id} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
