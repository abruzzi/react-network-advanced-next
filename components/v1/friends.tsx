import type { User } from "@/components/types";
import Image from "next/image";
import React from "react";

const Friends = ({ users }: { users: User[] }) => {
  return (
    <div className="py-4">
      <h2 className="text-lg text-slate-900 tracking-wider">Friends</h2>
      <div className="flex flex-row pt-4 gap-4">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col items-center">
            <Image
              src={`https://i.pravatar.cc/150?u=${user.id}`}
              alt={`User ${user.name} avatar`}
              className="w-8 h-8 rounded-full"
              width={32}
              height={32}
            />
            <span className="text-xs text-slate-700">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Friends };
