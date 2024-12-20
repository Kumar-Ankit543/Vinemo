import { getServerSession } from "next-auth";
import { P2Ptransfer } from "../../../components/P2Ptransfer";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/auth";
import db from "@repo/db/client";
import { redirect } from "next/navigation";

async function getP2Ptransaction() {
  const session = await getServerSession(authOptions);
  const txns = await db.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    id: t.id,
    time: t.timestamp,
    amount: t.amount,
    toUserId: t.toUserId,
  }));
}

export default async function () {
  const session = await getServerSession(authOptions);
  if (!session.user) {
    redirect("/");
  }
  const transactions = await getP2Ptransaction();
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Transfer Money</h1>
        <p className="text-gray-600">Send money to your friends and family</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <SendCard />

        <P2Ptransfer transactions={transactions} />
      </div>
    </div>
  );
}
