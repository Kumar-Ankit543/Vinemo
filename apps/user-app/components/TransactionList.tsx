import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function TransactionList() {
  return (
    <div className="divide-y divide-gray-100">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="p-4 hover:bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={`https://source.unsplash.com/random/40x40?face&${i + 10}`}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900">
                  {i % 2 === 0 ? "Payment Sent" : "Payment Received"}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(2024, 0, 20 - i).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`text-sm font-medium ${i % 2 === 0 ? "text-red-600" : "text-green-600"}`}
              >
                {i % 2 === 0 ? "-" : "+"}${(Math.random() * 100).toFixed(2)}
              </span>
              {i % 2 === 0 ? (
                <ArrowUpRight className="w-4 h-4 text-red-600" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-green-600" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
