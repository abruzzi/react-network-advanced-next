export type User = {
  id: string;
  name: string;
  avatar?: string;
  bio: string;
  interests: string[];
};

export type UserDetail = {
  id: string;
  name: string;
  bio: string;
  twitter: string;
  homepage: string;
}

export type Ad = {
  id: string;
  title: string;
  content: string;
};

export type Feed = {
  id: string;
  title: string;
  description: string;
};