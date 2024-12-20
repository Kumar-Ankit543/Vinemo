export const OnRampTransaction = ({
  transactions,
}: {
  transactions: {
    id: number;
    time: Date;
    amount: number;
    status: string;
    provider: string;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        Recent Transactions
      </h2>
      <div className="pt-2">
        {transactions.map((t) => (
          <div key={t.id} className="flex justify-between">
            <div>
              <div className="text-sm">Received INR</div>
              {t.status === "Success" ? (
                <div className="text-sm text-green-600">{t.status}</div>
              ) : t.status === "Processing" ? (
                <div className="text-sm text-orange-600">{t.status}</div>
              ) : (
                <div className="text-sm text-red-600">{t.status}</div>
              )}
              <div className="text-slate-600 text-xs pb-4">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              + Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
