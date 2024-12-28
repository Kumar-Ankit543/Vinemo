"use client";
import { SigninComponent } from "@repo/ui/signin";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button, Input } from "@repo/ui";
import { PhoneIcon, LockOpenIcon as LockClosedIcon } from "lucide-react";

export default function SigninPage() {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: true,
      number,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Welcome Back
        </h1>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-white">
            Phone Number
          </label>
          <div className="relative">
            <PhoneIcon
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200"
              size={20}
            />
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="pl-10 bg-white bg-opacity-20 border-none text-white placeholder-gray-300"
              required
            />
          </div>
        </div>
        <div className="space-y-2 pt-3">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <div className="relative">
            <LockClosedIcon
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200"
              size={20}
            />
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 bg-white bg-opacity-20 border-none text-white placeholder-gray-300"
              required
            />
          </div>
        </div>{" "}
        <br></br>
        <Button
          onClick={handleSubmit}
          className="w-full bg-white text-blue-600 hover:bg-opacity-90 transition-all duration-200"
        >
          Sign In
        </Button>
        <p className="mt-6 text-center text-white text-sm">
          Don't have an account?{" "}
          <a href="#" className="font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
