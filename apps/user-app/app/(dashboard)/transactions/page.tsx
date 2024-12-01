import { TransactionList } from "../../../components/TransactionList";
import { TransactionFilters } from "../../../components/TransactionFilters";

export default function TransactionsPage() {
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
