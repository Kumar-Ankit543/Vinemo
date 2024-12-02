"use client";
import { Select } from "@repo/ui/select";
import { IndianRupee } from "lucide-react";
import { useState } from "react";

const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    redirectURL: "https://netbanking.hdfcbank.com",
  },
  {
    name: "Axis Bank",
    redirectURL: "https://omni.axisbank.co.in/axisretailbanking/",
  },
];

export function PaymentForm() {
  const [redirectURL, setRedirectURL] = useState(
    SUPPORTED_BANKS[0]?.redirectURL
  );
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Payment Details
      </h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amount
        </label>
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-gray-500">
            <IndianRupee className="text-green-600" />
          </span>
          <input
            type="text"
            className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0.00"
          />
        </div>
      </div>

      <div className="py-3 mb-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Choose Bank
        </label>
        <Select
          onSelect={(value) =>
            setRedirectURL(
              SUPPORTED_BANKS.find((x) => x.name === value)?.redirectURL
            )
          }
          options={SUPPORTED_BANKS.map((x) => ({
            key: x.name,
            value: x.name,
          }))}
        />
      </div>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Send Money
      </button>
    </div>
  );
}
