import { Ad } from "@/components/types";
import { get } from "@/utils/get";

async function getAds(): Promise<Ad[]> {
  return await get("/ads");
}

export async function Ads() {
  const ads = await getAds();

  return (
    <div className="py-4">
      <h2 className="text-lg text-slate-400 tracking-wider">Ads</h2>
      <div className="flex flex-col py-4 gap-2">
        {ads.map((ad) => (
          <div key={ad.id} className="text-sm">
            <h3 className="text-slate-700">{ad.title}</h3>
            <p className="text-xs text-slate-600 font-light">{ad.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
