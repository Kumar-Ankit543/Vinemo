"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import prisma from "@repo/db/client";

function generateBase64RandomString(length: number) {
  const bytes = new Uint8Array(Math.ceil((length * 3) / 4));
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes)).slice(0, length);
}

export async function onRampTransaction(amount: number, provider: string) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;

  if (!userId) {
    return {
      message: "User not logged in",
    };
  }
  const token = generateBase64RandomString(48);

  await prisma.onRampTransaction.create({
    data: {
      userId: Number(userId),
      amount,
      provider,
      status: "Processing",
      startTime: new Date(),
      token,
    },
  });
  return {
    message: "OnRamp Transaction successful",
  };
}
