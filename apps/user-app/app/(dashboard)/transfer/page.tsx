import { UserSearch } from "../../../components/UserSearch";
import { PaymentForm } from "../../../components/PaymentForm";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransaction } from "../../../components/OnRampTransaction";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import db from "@repo/db/client";
import { redirect } from "next/navigation";

async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await db.balance.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return {
    amount: balance[0]?.amount || 0,
    locked: balance[0]?.locked || 0,
  };
}

async function getOnRampTransaction() {
  const session = await getServerSession(authOptions);
  const txns = await db.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    id: t.id,
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

export default async function TransferPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user || null) {
    return redirect("/");
  }
  const transactions = await getOnRampTransaction();
  const balance = await getBalance();
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Transfer Money</h1>
        <p className="text-gray-600">Add money to your wallet</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PaymentForm />
        <div>
          <div className="pb-2">
            <BalanceCard amount={balance.amount} locked={balance.locked} />
          </div>
          <div>
            <OnRampTransaction transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}
