"use client";

export function TransactionFilters() {
  return (
    <div className="p-4 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg">
            All
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
            Sent
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
            Received
          </button>
        </div>
        <input
          type="text"
          placeholder="Search transactions..."
          className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}
