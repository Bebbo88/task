"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/features/dashboard/Header";
import StatsCard from "@/features/dashboard/StatsCard";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const r = useRouter();
  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
    else r.push("/auth/login");
  }, [r]);
  if (!user) return null;
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="Total Projects"
            value="12"
            color="border-blue-500 text-blue-500"
          />
          <StatsCard
            title="Active Tasks"
            value="5"
            color="border-green-500 text-green-500"
          />
          <StatsCard
            title="Messages"
            value="3"
            color="border-purple-500 text-purple-500"
          />
        </main>
      </div>
    </div>
  );
}
