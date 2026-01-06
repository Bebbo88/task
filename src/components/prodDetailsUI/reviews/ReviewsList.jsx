import ReviewItem from "./ReviewItem";
import Image from "next/image";

export default function ReviewsList() {
  return (
    <div className=" relative">
      {[1, 2, 3, 4].map((i) => (
        <ReviewItem key={i} />
      ))}

      <div className="flex justify-center mt-10">
        <button className="px-8 py-3 bg-[#F5F5F5] rounded-xl text-sm text-[#BE968E] font-medium hover:bg-[#F5F5F5] transition">
          View More Comments
        </button>
      </div>
    </div>
  );
}
