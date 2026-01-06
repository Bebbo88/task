export default function TotalReviews() {
  return (
    <div className="hidden md:flex flex-col items-center gap-4 mt-16">
      <span className="text-gray-500 text-sm">Total Reviews</span>

      <span className="text-5xl font-semibold">3.0K</span>

      <button className="mt-2 px-6 py-3 bg-[#BE968E] text-white rounded-xl text-sm font-medium flex items-center gap-2">
        Add Comment
        <span className="w-4 h-4 bg-white/30 rounded-full" />
      </button>
    </div>
  );
}
