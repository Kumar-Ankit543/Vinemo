"use client";

import {
  Home,
  ArrowRightLeft,
  History,
  CircleArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: ArrowRightLeft, label: "Transfer", path: "/transfer" },
  { icon: History, label: "Transactions", path: "/transactions" },
  { icon: CircleArrowOutUpRight, label: "P2P Transfer", path: "/p2pTransfer" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen w-64 bg-blue-600 text-white p-6">
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-800 text-white"
                      : "text-blue-100 hover:bg-blue-800"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
