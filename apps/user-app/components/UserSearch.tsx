"use client";

import { Search } from "lucide-react";

const users = [
  { name: "Alex Johnson", username: "alex" },
  { name: "Emma Wilson", username: "emma" },
  { name: "Michael Brown", username: "michael" },
  { name: "Sarah Davis", username: "sarah" },
  { name: "James Miller", username: "james" },
];

export function UserSearch() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for people..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {users.map((user, i) => (
          <div
            key={user.username}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <img
                src={`https://source.unsplash.com/random/40x40?face&${i + 5}`}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">@{user.username}</p>
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
