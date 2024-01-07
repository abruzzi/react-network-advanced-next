import { getFeeds } from "@/components/v5/apis";

async function Feeds({ category }: { category: string }) {
  const feeds = await getFeeds(category);

  return (
    <div className="py-4">
      <h2 className="text-lg text-slate-900 tracking-wider">Your Feeds</h2>
      <div className="flex flex-col py-4 gap-2">
        {feeds.map((feed) => (
          <>
            <h3 className="">{feed.title}</h3>
            <p className="text-xs text-slate-600">{feed.description}</p>
          </>
        ))}
      </div>
    </div>
  );
}

export { Feeds };
