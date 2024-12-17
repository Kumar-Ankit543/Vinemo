import db from "@repo/db/client";

async function getFriendName(toUserId: number) {
  const name = await db.user.findUnique({
    where: {
      id: toUserId,
    },
  });
  return name?.name;
}

export const P2Ptransfer = ({
  transactions,
}: {
  transactions: {
    id: number;
    time: Date;
    amount: number;
    toUserId: number;
  }[];
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        Recent Transactions
      </h2>
      <div className="pt-2">
        {transactions.map((t) => (
          <div key={t.id} className="flex justify-between">
            <div>
              <div className="text-sm">
                Sent INR to{" "}
                <span className="text-blue-600 uppercase">
                  {getFriendName(t.toUserId)}
                </span>
              </div>
              <div className="text-slate-600 text-xs pb-4">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              - Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
