export default function RatingSummary() {
  return (
    <>
      <div>
        <div>
          <h2 className="text-2xl font-semibold">Rating & Reviews</h2>
          <span className="block w-12 h-[3px] rounded bg-[#BE968E] mt-2" />
        </div>

        <div className="flex justify-center md:justify-start gap-2">
          <div className="flex items-end gap-2">
            <span className="text-[120px] font-light ">4,5</span>
            <span className="text-gray-400 text-lg mb-2">/5</span>
          </div>
        </div>
      </div>
    </>
  );
}
