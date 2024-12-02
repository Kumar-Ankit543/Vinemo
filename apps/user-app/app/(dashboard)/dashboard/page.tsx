import { StatsCard } from "../../../components/StatsCard";
import { RecentActivity } from "../../../components/RecentActivity";
import { Wallet, TrendingUp, Users } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";

const stats = [
  { label: "Balance", value: "$2,459.50", icon: Wallet },
  { label: "Total Spent", value: "$1,245.30", icon: TrendingUp },
  { label: "Active Friends", value: "234", icon: Users },
];

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/api/auth/signin");
  } else {
    return (
      <div>
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, Alex!
            </h1>
            <p className="text-gray-600">Here's your financial overview</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat) => (
              <StatsCard key={stat.label} {...stat} />
            ))}
          </div>

          <RecentActivity />
        </div>
      </div>
    );
  }
}
