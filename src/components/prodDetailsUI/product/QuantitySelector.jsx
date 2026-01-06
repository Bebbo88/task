"use client";
import { useState } from "react";

export default function QuantitySelector() {
  const [qty, setQty] = useState(1);
  const price = 300;

  return (
    <div className="flex items-start justify-between w-full">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">
          Quantity
          <span className="text-gray-400 font-normal">
            (${price.toFixed(2)} for Piece)
          </span>
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-[#F5F5F5] rounded-2xl px-4 py-3 gap-6 w-fit">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="w-[60px] h-[60px] bg-white cursor-pointer rounded-xl flex items-center justify-center text-3xl text-gray-400"
            >
              –
            </button>

            <span className="text-3xl font-semibold w-10 text-center">
              {String(qty).padStart(2, "0")}
            </span>

            <button
              onClick={() => setQty(qty + 1)}
              className="w-[60px] h-[60px] cursor-pointer bg-white rounded-xl flex items-center justify-center text-3xl text-black"
            >
              +
            </button>
          </div>
          <div className="text-2xl xl:text-4xl font-semibold">
            ${(price * qty).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
