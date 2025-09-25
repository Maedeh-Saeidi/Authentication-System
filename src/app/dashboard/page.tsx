"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/app/components/ui/Button";
import { removeUser } from "@/lib/saveToStorage";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      router.replace("/login");
    }
  }, [router]);

  const handleLogout = () => {
    removeUser();
    router.replace("/login");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full transition-all duration-300 hover:shadow-2xl">
        <div className="text-center">
          <img
            src={user.picture}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-indigo-100 shadow-md"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome {user.name} 👋
          </h1>
          <p className="text-gray-600 mb-6 text-lg">{user.email}</p>

          <Button
            onClick={handleLogout}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}