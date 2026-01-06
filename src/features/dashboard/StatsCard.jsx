export default function StatsCard({ title, value, color }) {
  return (
    <div className={`p-6 bg-white rounded-lg h-40 shadow border-l-4 ${color}`}>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
