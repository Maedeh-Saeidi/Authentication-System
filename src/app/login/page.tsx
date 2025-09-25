"use client";

import { useState } from "react";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import { useGetUserInfo } from "@/hooks/queries/useGetUserInfo";
import { saveUser } from "@/lib/saveToStorage";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const { isFetching, isLoading, isError, refetch } = useGetUserInfo();

  const validatePhone = (value: string) => /^(\+98|0)?9\d{9}$/.test(value);

  const handleLogin = async () => {
    if (!validatePhone(phone)) {
      setError("Invalid Phone Number");
      return;
    }
    setError("");

    const result = await refetch();
    if (result.data?.data) {
      const user = {
        name: `${result.data.data?.results?.[0].name?.first} ${result.data.data?.results?.[0].name?.last}`,
        email: result.data.data?.results?.[0].email,
        picture: result.data.data?.results?.[0].picture.medium,
      };
      saveUser(user);
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <h1 className="text-xl font-semibold mb-4 text-black">Login</h1>
        <Input
          type="tel"
          label="Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={error}
          placeholder="09123456789"
        />
        <Button
          onClick={handleLogin}
          loading={isLoading || isFetching}
          disabled={isFetching}
        >
          Login
        </Button>
        {isError && (
          <p className="text-red-500 text-sm mt-2">Something went wrong</p>
        )}
      </div>
    </div>
  );
}
