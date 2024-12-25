import { TransactionList } from "../../../components/TransactionList";
import { TransactionFilters } from "../../../components/TransactionFilters";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";

export default async function TransactionsPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user || null) {
    redirect("/");
  }
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Transaction History
        </h1>
        <p className="text-gray-600">View all your past transactions</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <TransactionFilters />
        <TransactionList />
      </div>
    </div>
  );
}
