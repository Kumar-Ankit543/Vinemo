export const OnRampTransaction = ({
  transactions,
}: {
  transactions: {
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
      <div className="pt-2">
        {transactions.map((t) => (
          <div className="flex justify-center">
            <div>
              <div className="text-sm">Received INR</div>
              <div className="text-slate-600 text-xs">
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
