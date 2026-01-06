"use client";

import { useRef } from "react";
import SimilarCard from "./SimilarCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function SimilarItems() {
  const images = [
    "/images/prod1.png",
    "/images/prod2.png",
    "/images/prod3.png",
    "/images/prod4.png",
    "/images/prod4.png",
    "/images/prod4.png",
    "/images/prod4.png",
    "/images/prod4.png",
  ];

  const swiperRef = useRef(null);

  return (
    <section className="py-10 relative">
      <h2 className="text-2xl font-semibold mb-8">
        Similar Items
        <span className="block w-12 h-[3px] rounded bg-[#BE968E] mt-2" />
      </h2>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 1.15,
            spaceBetween: 16,
          },

          360: {
            slidesPerView: 1.25,
            spaceBetween: 16,
          },

          414: {
            slidesPerView: 1.4,
            spaceBetween: 18,
          },

          480: {
            slidesPerView: 1.6,
            spaceBetween: 18,
          },

          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },

          900: {
            slidesPerView: 2.6,
            spaceBetween: 22,
          },

          1024: {
            slidesPerView: 3.2,
            spaceBetween: 24,
          },

          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },

          1440: {
            slidesPerView: 5,
            spaceBetween: 200,
          },

          1600: {
            slidesPerView: 5.5,
            spaceBetween: 220,
          },

          1920: {
            slidesPerView: 6,
            spaceBetween: 280,
          },
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <SimilarCard image={img} discount={i % 2 === 1} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-12 h-12 text-2xl rounded-full bg-[#E8EDF2] flex items-center justify-center"
        >
          ‹
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-12 h-12 text-2xl rounded-full bg-[#BE968E] text-white flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </section>
  );
}
