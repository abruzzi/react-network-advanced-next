export type User = {
  id: string;
  name: string;
  avatar?: string;
  bio: string;
  interests: string[];
};

export type Ad = {
  id: string;
  title: string;
  content: string;
};
