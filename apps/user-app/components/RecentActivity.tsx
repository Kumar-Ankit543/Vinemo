const activities = [
  { name: "Coffee", user: "John", amount: 15.99 },
  { name: "Dinner", user: "Sarah", amount: 45.5 },
  { name: "Movie", user: "Mike", amount: 25.0 },
  { name: "Groceries", user: "Emma", amount: 89.99 },
  { name: "Utilities", user: "David", amount: 120.0 },
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Recent Activity
      </h2>
      <div className="space-y-4">
        {activities.map((activity, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
          >
            <div className="flex items-center space-x-4">
              <img
                src={`https://source.unsplash.com/random/40x40?face&${i}`}
                alt={activity.user}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {activity.name}
                </p>
                <p className="text-xs text-gray-500">{activity.user}</p>
              </div>
            </div>
            <p className="text-sm font-medium text-red-600">
              -${activity.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
