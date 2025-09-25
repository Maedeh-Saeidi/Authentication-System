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
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full text-center">
        <img
          src={user.picture}
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-black">
          Welcome {user.name} 👋
        </h1>
        <p className="text-gray-600 mb-4">{user.email}</p>

        <Button onClick={handleLogout} className="mt-4 w-full">
          Logout
        </Button>
      </div>
    </div>
  );
}
