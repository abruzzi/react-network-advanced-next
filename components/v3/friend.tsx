"use client";

import { User } from "@/components/types";
import Image from "next/image";
import React, { Suspense } from "react";
import Loading from "@/components/v3/loading";
import dynamic from "next/dynamic";
import {
  NextUIProvider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

const UserDetailCard = dynamic(() => import("./user-detail-card"));

export const Friend = ({ user }: { user: User }) => {
  const handleHover = () => {
    console.log("preloading...");
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
            <Image
              src={`https://i.pravatar.cc/150?u=${user.id}`}
              alt={`User ${user.name} avatar`}
              className="w-8 h-8 rounded-full"
              width={32}
              height={32}
            />
            <span className="text-xs text-slate-700">{user.name}</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[240px]">
          <Suspense fallback={<Loading />}>
            <UserDetailCard id={user.id} />
          </Suspense>
        </PopoverContent>
      </Popover>
    </NextUIProvider>
  );
};