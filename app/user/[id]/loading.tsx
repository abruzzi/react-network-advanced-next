import { AboutSkeleton } from "@/components/misc/about-skeleton";
import { FriendsSkeleton } from "@/components/misc/friends-skeleton";
import { FeedsSkeleton } from "@/components/misc/feeds-skeleton";

export default function Loading() {
  return (
    <div className="max-w-3xl m-auto my-4 text-slate-800">
      <h1 className="text-4xl py-4 mb-4 tracking-wider font-bold">Profile</h1>
      <div className="rounded border p-6 border-slate-300">
        <AboutSkeleton />
        <FeedsSkeleton />
        <FriendsSkeleton />
      </div>
    </div>
  );
}
