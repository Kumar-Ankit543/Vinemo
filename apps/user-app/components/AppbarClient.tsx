"use client";
import { AppBar } from "@repo/ui/AppBar";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const AppbarClient = () => {
  const router = useRouter();
  const session = useSession();
  return (
    <div>
      <AppBar
        onSignin={async () => {
          await signIn();
          router.push("/dashboard");
        }}
        onSignout={signOut}
        user={session.data?.user}
      />
    </div>
  );
};
