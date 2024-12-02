"use client";
import { SigninComponent } from "@repo/ui/signin";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();
  const handleClick = (): void => {
    signIn("credentials", {
      number: "",
      password: "",
      redirect: false,
    });
    console.log("router called ");
    router.push("/");
  };

  return (
    <div>
      <SigninComponent onClick={handleClick} />
    </div>
  );
}
