import { Button } from "@repo/ui";
import { IndianRupee, BookUser } from "lucide-react";

export default function () {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Send Money</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Person Number
          </label>
          <div className="relative mb-4">
            <span className="absolute left-1 top-2.5 text-gray-500">
              <BookUser className="text-blue-600" />
            </span>
            <input
              type="text"
              className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:border-transparent"
              placeholder="1234567890"
            />
          </div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <div className="relative mb-4">
            <span className="absolute left-1 top-2.5 text-gray-500">
              <IndianRupee className="text-green-600" />
            </span>
            <input
              type="text"
              className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:border-transparent"
              placeholder="0.00"
            />
          </div>
        </div>
        <Button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Send Money
        </Button>
      </div>
    </div>
  );
}
