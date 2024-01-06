import Link from "next/link";

export default async function Home() {
  return (
    <div className="max-w-3xl m-auto my-4 text-slate-800">
      <Link href={"/user/u1"} >User 1</Link>
    </div>
  );
}
