import { get } from "@/utils/get";
import { Feed, User, UserDetail } from "@/components/types";

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

export async function getFriends(id: string) {
  return await get<User[]>(`/users/${id}/friends`);
}

export async function getUser(id: string) {
  return await get<User>(`/users/${id}`);
}

export async function getFeeds(category: string) {
  return await get<Feed[]>(`/articles/${category}`);
}