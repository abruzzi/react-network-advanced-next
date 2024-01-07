import React from "react";
import { Friend } from "@/components/v5/friend";
import { getFriends } from "@/components/v5/apis";

async function Friends({ id }: { id: string }) {
  const friends = await getFriends(id);

  return (
    <div>
      <h2 className="text-lg text-slate-900 tracking-wider">Friends</h2>
      <div className="flex flex-col pt-4 gap-2">
        {friends.map((user) => (
          <Friend user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export { Friends };
