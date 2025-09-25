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

  const validatePhone = (value: string) => /^(\+98|0|0098)9\d{9}$/.test(value);

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

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
          className="w-full mt-6"
        >
          Sign In
        </Button>

        {isError && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
          </div>
        )}
      </div>
    </div>
  );
}