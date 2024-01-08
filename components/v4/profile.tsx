import { Suspense } from "react";
import { Friends } from "@/components/v4/friends";
import { UserInfo } from "@/components/v4/userInfo";

import { FriendsSkeleton } from "@/components/misc/friends-skeleton";
import { UserInfoSkeleton } from "@/components/misc/user-info-skeleton";

export async function Profile({ id }: { id: string }) {
  return (
    <div className="max-w-3xl m-auto my-4 text-slate-800">
      <h1 className="text-4xl py-4 mb-4 tracking-wider font-bold">Profile</h1>
      <div className="rounded border p-6 border-slate-300">
        <Suspense fallback={<UserInfoSkeleton />}>
          <UserInfo id={id} />
        </Suspense>

        <Suspense fallback={<FriendsSkeleton />}>
          <Friends id={id} />
        </Suspense>
      </div>
    </div>
  );
}
