import Link from "next/link";
import {Ads} from "@/components/v2/ads";

export default async function Home() {
  return (
    <div className="max-w-3xl m-auto my-4 text-slate-800">
      <Ads />
    </div>
  );
}
