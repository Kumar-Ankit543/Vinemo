import { UserSearch } from "../../../components/UserSearch";
import { PaymentForm } from "../../../components/PaymentForm";

export default function TransferPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Transfer Money</h1>
        <p className="text-gray-600">Send money to your friends and family</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UserSearch />
        <PaymentForm />
      </div>
    </div>
  );
}
