import Image from "next/image";

export default function SimilarCard({ image, discount = false }) {
  return (
    <div className="w-[260px] flex-shrink-0">
      <div className="relative w-full h-[300px] rounded-2xl border border-gray-100 overflow-hidden">
        {discount && (
          <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-lg border text-[#BE968E]">
            25% OFF
          </span>
        )}
        <div className="flex items-center  absolute top-2 right-2 gap-2">
          <div className="border-[#4040401A] border p-1">
            <Image src="/icons/bag-add.svg" width={20} height={20} alt="bag" />
          </div>
          <div className="border-[#4040401A] border p-1">
            <Image src="/icons/heart2.svg" width={20} height={20} alt="heart" />
          </div>
        </div>
        <Image
          src={image}
          alt="product"
          fill
          className="object-contain p-10 mt-5"
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Dresses</span>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Image src="/icons/star.svg" alt="star" width={14} height={14} />
            4.5 <span className="text-xs">(2910)</span>
          </div>
        </div>
        <p className="text-sm font-medium leading-5 line-clamp-2">
          J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With
          Yello ...
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold">AED 900</span>
            <span className="text-sm line-through text-gray-400">AED 1300</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#BE968E]" />
            <span className="w-4 h-4 rounded-full bg-black" />
            <span className="w-4 h-4 rounded-full bg-gray-300" />
            <span className="text-xs text-gray-500">+2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
