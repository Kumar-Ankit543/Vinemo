import { UserSearch } from "../../../components/UserSearch";
import { PaymentForm } from "../../../components/PaymentForm";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransaction } from "../../../components/OnRampTransaction";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import db from "@repo/db/client";

async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await db.balance.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return {
    //@ts-ignore
    amount: balance.amount,
    //@ts-ignore
    locked: balance.locked,
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
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

export default async function TransferPage() {
  const transactions = await getOnRampTransaction();
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Transfer Money</h1>
        <p className="text-gray-600">Send money to your friends and family</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PaymentForm />
        <div>
          <div className="pb-2">
            <BalanceCard amount={100} locked={200} />
          </div>
          <div>
            <OnRampTransaction transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}
