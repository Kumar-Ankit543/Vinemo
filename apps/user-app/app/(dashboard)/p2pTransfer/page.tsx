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
    <div className="grid grid-cols-2 gap-2 mt-10 ml-2 mr-2">
      <SendCard />

      <P2Ptransfer transactions={transactions} />
    </div>
  );
}
