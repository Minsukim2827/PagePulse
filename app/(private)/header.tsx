"use client";
import useSWR from "swr";
import User from "@/components/user";

export default function Header() {
  const { data, error, isLoading } = useSWR("/api/users/profile");
console.log(data, error, isLoading);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>No data available</div>;
  console.log("this is the data:", data)

  return (
    <header className="flex gap-4 flex-row w-full p-5 dark:bg-slate-800 bg-slate-300 rounded-lg my-2 justify-between items-center">
      <div>
        <h1 className="font-mono text-lg">Strings</h1>
      </div>
      <div>
        <User user={data.data} href="account" />
      </div>
    </header>
  );
}