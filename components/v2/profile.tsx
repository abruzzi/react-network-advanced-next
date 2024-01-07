import { Suspense } from "react";
import Loading from "@/components/v2/loading";
import { About } from "@/components/v2/about";
import { Friends } from "@/components/v2/friends";
import { get } from "@/utils/get";
import { User } from "@/components/types";
import { Feeds } from "@/components/v2/feeds";
import { AboutSkeleton } from "@/components/misc/about-skeleton";
import { FriendsSkeleton } from "@/components/misc/friends-skeleton";
import {FeedsSkeleton} from "@/components/misc/feeds-skeleton";

async function getUser(id: string) {
  return await get<User>(`/users/${id}`);
}

export async function Profile({ id }: { id: string }) {
  const user = await getUser(id);

  return (
    <div className="max-w-3xl m-auto my-4 text-slate-800">
      <h1 className="text-4xl py-4 mb-4 tracking-wider font-bold">Profile</h1>
      <div className="rounded border p-6 border-slate-300">
        <>
          <Suspense fallback={<AboutSkeleton />}>
            <About user={user} />
          </Suspense>

          <Suspense fallback={<FriendsSkeleton />}>
            <Friends id={id} />
          </Suspense>

          <Suspense fallback={<FeedsSkeleton />}>
            <Feeds category={user.interests[0]} />
          </Suspense>
        </>
      </div>
    </div>
  );
}
