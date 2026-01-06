"use client";
import { useState, useRef } from "react";
import ThumbnailList from "./ThumbnailList";
import Image from "next/image";

export default function ProductGallery() {
  const images = [
    "/images/ppp (2).png",
    "/images/t1.png",
    "/images/t2.png",
    "/images/t3.png",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const thumbsSwiperRef = useRef(null);

  const handleNext = () => {
    setSelectedIndex((prev) => {
      const next = (prev + 1) % images.length;
      thumbsSwiperRef.current?.slideTo(next - 1);
      return next;
    });
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => {
      const next = (prev - 1 + images.length) % images.length;
      thumbsSwiperRef.current?.slideTo(next - 1);
      return next;
    });
  };

  return (
    <div className="flex-col">
      {/* Main Image */}
      <div className="relative bg-[#F5F5F5] rounded-xl w-full max-w-[524px] h-[565px] flex items-end justify-center">
        <Image
          src={images[selectedIndex]}
          alt="Product"
          width={300}
          height={565}
          className="object-contain mix-blend-multiply"
        />

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-8 bg-[#BE968E] rounded-full p-2"
        >
          <Image
            src="/icons/arrow-right.svg"
            alt="next"
            width={24}
            height={24}
          />
        </button>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-8 bg-[#C4C4C4] rounded-full p-2"
        >
          <Image
            src="/icons/arrow-reverse.svg"
            alt="prev"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Thumbnails */}
      <ThumbnailList
        images={images.slice(1)}
        selected={images[selectedIndex]}
        onSelect={(img) => setSelectedIndex(images.findIndex((i) => i === img))}
        swiperRef={thumbsSwiperRef}
      />
    </div>
  );
}
