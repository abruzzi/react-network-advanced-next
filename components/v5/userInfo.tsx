import type { User } from "@/components/types";
import Image from "next/image";
import { Suspense } from "react";
import { FeedsSkeleton } from "@/components/misc/feeds-skeleton";
import { Feeds } from "@/components/v5/feeds";
import { getUser } from "@/components/v5/apis";

function About({ user }: { user: User }) {
  return (
    <div className="flex flex-row gap-2 pb-4 items-center">
      <div>
        <Image
          src={user.avatar ?? "/juntao.qiu.avatar.png"}
          alt={`User ${user.name} Avatar`}
          className="w-12 h-12 rounded-full"
          width={48}
          height={48}
        />
      </div>
      <div>
        <div className="text-2xl font-bold">{user.name}</div>
        <p className="text-xs">{user.bio}</p>
      </div>
    </div>
  );
}

export async function UserInfo({ id }: { id: string }) {
  const user = await getUser(id);

  return (
    <>
      <About user={user} />
      <Suspense fallback={<FeedsSkeleton />}>
        <Feeds category={user.interests[0]} />
      </Suspense>
    </>
  );
}
