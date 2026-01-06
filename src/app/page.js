"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Frontend Task Demo
        </h1>

        <p className="text-sm text-gray-500">
          Please choose which task you want to review
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => router.push("/auth/login")}
            className="w-full py-3 cursor-pointer rounded-xl bg-[#BE968E] text-white font-medium hover:opacity-90 transition"
          >
            Authentication Flow
          </button>

          <button
            onClick={() => router.push("/prodDetails")}
            className="w-full py-3 cursor-pointer rounded-xl border border-[#BE968E] text-[#BE968E] font-medium hover:bg-[#BE968E]/10 transition"
          >
            Product Details UI
          </button>
        </div>
      </div>
    </main>
  );
}
