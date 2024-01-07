import { get } from "@/utils/get";
import { UserDetail } from "@/components/types";

import { cache } from "react";

const preloadedUserIds = new Set();

export const getUserDetail = cache(async (id: string) => {
  preloadedUserIds.add(id);
  return await get<UserDetail>(`/users/${id}/details`);
});

export const preload = (id: string) => {
  if(!preloadedUserIds.has(id)) {
    void getUserDetail(id);
  }
};
