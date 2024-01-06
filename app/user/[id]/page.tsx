import type { Ad, User } from "@/components/types";
import { get } from "@/utils/get";
import { Ads } from "@/components/ads";
import { Profile } from "@/components/profile";

interface PageProps {
  params: {
    id: string;
  };
}

async function getUserBasicInfo(id: string) {
  const [user, friends] = await Promise.all([
    get<User>(`/users/${id}`),
    get<User[]>(`/users/${id}/friends`),
  ]);

  return { user, friends };
}

async function getAds(): Promise<Ad[]> {
  return await get("/ads");
}

export default async function Page({ params }: PageProps) {
  const ads = await getAds();
  const { user, friends } = await getUserBasicInfo(params.id);

  return (
    <div className="max-w-3xl m-auto my-4 text-slate-800">
      <h1 className="text-4xl py-4 mb-4 tracking-wider font-bold">Profile</h1>
      <Ads ads={ads} />
      <div className="rounded border p-6 border-slate-300">
        <Profile user={user} friends={friends} />
      </div>
    </div>
  );
}
