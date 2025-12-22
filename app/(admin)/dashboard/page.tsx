"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();
  console.log(session);

  useEffect(() => {
    if (status === "unauthenticated" || session?.user.role !== "admin") {
      router.push("/login");
    }
  }, [router, status, session?.user.role]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-96 bg-gray-300 text-black rounded-2xl flex justify-center items-center">
      <h1 className="text-3xl">Dashboard</h1>
    </div>
  );
}
