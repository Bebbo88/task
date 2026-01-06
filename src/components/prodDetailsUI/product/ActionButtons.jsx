import Image from "next/image";
import QuantitySelector from "./QuantitySelector";

export default function ActionButtons({ quantity, setQuantity }) {
  return (
    <div className="py-6 flex flex-col md:flex-row md:space-x-4">
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <div className="w-full md:w-80 h-14 mt-6 md:mt-15 rounded-2xl bg-[#BE968E] flex items-center justify-center gap-1">
        <button className=" text-white  py-3 font-medium ">Add to Cart </button>
        <span>
          <Image src="/icons/bag.svg" width={20} height={20} alt="bag" />
        </span>
      </div>
    </div>
  );
}
