import { Profile } from "@/components/v2/profile";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  return <Profile id={params.id} />;
}
