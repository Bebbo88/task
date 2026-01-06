"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ThumbnailList({
  images,
  selected,
  onSelect,
  swiperRef,
}) {
  return (
    <div className="pt-3">
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="!w-40">
            <button
              onClick={() => onSelect(img)}
              className={`w-40 h-40 bg-[#F5F5F5] border rounded-xl overflow-hidden ${
                selected === img
                  ? "border-black ring-1 ring-black"
                  : "border-gray-200"
              }`}
            >
              <img
                src={img}
                alt="Thumbnail"
                className="w-full h-full object-cover"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
