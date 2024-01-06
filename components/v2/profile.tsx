import { Suspense } from "react";
import Loading from "@/components/v2/loading";
import { About } from "@/components/v2/about";
import { Friends } from "@/components/v2/friends";
import { get } from "@/utils/get";
import { User } from "@/components/types";
import { Feeds } from "@/components/v2/feeds";

async function getUser(id: string) {
  return await get<User>(`/users/${id}`);
}

export async function Profile({ id }: { id: string }) {
  const user = await getUser(id);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <About user={user} />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Friends id={id} />
      </Suspense>

      <Suspense>
        <Feeds category={user.interests[0]} />
      </Suspense>
    </>
  );
}
