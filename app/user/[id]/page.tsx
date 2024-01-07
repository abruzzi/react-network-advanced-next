import { Profile } from "@/components/v2.5/profile";

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return [{ id: "u1" }, { id: "u2" }, { id: "u3" }];
}

export default async function Page({ params }: PageProps) {
  return <Profile id={params.id} />;
}
