"use client";
import { Select } from "@repo/ui/select";
import { IndianRupee } from "lucide-react";
import { useState } from "react";
import { Button } from "@repo/ui";
import { onRampTransaction } from "../app/lib/actions/onRampTrxn";

const SUPPORTED_BANKS = [
  {
    id: "1",
    name: "HDFC Bank",
    redirectURL: "https://netbanking.hdfcbank.com",
  },
  {
    id: "2",
    name: "Axis Bank",
    redirectURL: "https://omni.axisbank.co.in/axisretailbanking/",
  },
];

export function PaymentForm() {
  const [redirectURL, setRedirectURL] = useState(
    SUPPORTED_BANKS[0]?.redirectURL
  );
  const [amount, setAmount] = useState(0);
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");

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
          <span className="absolute left-1 top-2.5 text-gray-500">
            <IndianRupee className="text-green-600" />
          </span>
          <input
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
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
          onSelect={(value) => {
            setRedirectURL(
              SUPPORTED_BANKS.find((x) => x.name === value)?.redirectURL
            );
            setProvider(
              SUPPORTED_BANKS.find((x) => x.name === value)?.name as string
            );
          }}
          options={SUPPORTED_BANKS.map((x) => ({
            id: x.id,
            key: x.name,
            value: x.name,
          }))}
        />
      </div>
      <Button
        onClick={async () => {
          await onRampTransaction(amount * 100, provider);
          window.location.href = redirectURL || "";
        }}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Send Money
      </Button>
    </div>
  );
}
