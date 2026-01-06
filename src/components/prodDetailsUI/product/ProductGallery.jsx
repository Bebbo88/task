"use client";
import { useState } from "react";
import ThumbnailList from "./ThumbnailList";
import Image from "next/image";

export default function ProductGallery() {
  const images = [
    "/images/ppp (2).png",
    "/images/t1.png",
    "/images/t2.png",
    "/images/t3.png",
  ];
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="flex-col ">
      <div className=" relative bg-[#F5F5F5] rounded-xl w-full max-w-[524px] h-[565px]  flex items-end justify-center ">
        <div className="absolute flex top-3 left-3 right-3 gap-1">
          <div className="h-1 w-30 bg-[#D4D4D4] rounded"></div>
          <div className="h-1 w-30 bg-[#FFFFFF] rounded"></div>
          <div className="h-1 w-30 bg-[#D4D4D4] rounded"></div>
          <div className="h-1 w-30 bg-[#D4D4D4] rounded"></div>
        </div>
        <Image
          src={selected}
          alt="Product"
          width={300}
          height={565}
          className="object-contain mix-blend-multiply"
        />
        <div className="absolute top-1/2 right-8 bg-[#BE968E] rounded-full p-2">
          <Image
            src="/icons/arrow-right.svg"
            alt="heart"
            width={24}
            height={24}
          />
        </div>
        <div className="absolute top-1/2 left-8 bg-[#C4C4C4] rounded-full p-2">
          <Image
            src="/icons/arrow-reverse.svg"
            alt="heart"
            width={24}
            height={24}
          />
        </div>
      </div>
      <ThumbnailList
        images={images.slice(1)}
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
}
