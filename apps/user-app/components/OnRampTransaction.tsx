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
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"></div>
  );
};
