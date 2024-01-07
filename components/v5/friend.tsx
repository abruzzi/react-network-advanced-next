"use client";

import { User } from "@/components/types";
import Image from "next/image";
import React, { Suspense } from "react";
import Loading from "@/components/v5/loading";
import dynamic from "next/dynamic";
import {
  NextUIProvider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { preload } from "@/components/v5/apis";

const UserDetailCard = dynamic(() => import("./user-detail-card"));

function Brief({ user }: { user: User }) {
  return (
    <div className="flex flex-row gap-2 pb-2 items-center">
      <div>
        <Image
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt={`User ${user.name} avatar`}
          className="w-8 h-8 rounded-full"
          width={32}
          height={32}
        />
      </div>
      <div className="text-left">
        <div className="text-base font-bold">{user.name}</div>
        <p className="text-xs">{user.bio}</p>
      </div>
    </div>
  );
}

export const Friend = ({ user }: { user: User }) => {
  const handleHover = () => {
    preload(user.id);
  };

  return (
    <NextUIProvider>
      <Popover placement="bottom" showArrow offset={10}>
        <PopoverTrigger>
          <button
            className="flex flex-col items-center"
            tabIndex={0}
            onMouseEnter={handleHover}
          >
            <Brief user={user} />
          </button>
        </PopoverTrigger>
        <PopoverContent className="max-w-[240px] min-w-[200px] max-h-40 min-h-32">
          <Suspense fallback={<Loading />}>
            <UserDetailCard id={user.id} />
          </Suspense>
        </PopoverContent>
      </Popover>
    </NextUIProvider>
  );
};
