"use client";
import { useState } from "react";
import PriceTag from "./PriceTag";
import ColorSelector from "./ColorSelector";
import ActionButtons from "./ActionButtons";
import Image from "next/image";

export default function ProductInfo() {
  const [color, setColor] = useState("bg-green-900");
  const [qty, setQty] = useState(1);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center w-18 rounded-full mb-5 mt-5 md:mt-0  border-[#BE968E] border px-2 py-1">
          <p className="text-[#BE968E]">T-Shirt</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="border-[#4040401A] border p-1">
              <Image
                src="/icons/bag-add.svg"
                width={30}
                height={30}
                alt="bag"
              />
            </div>
            <div className="border-[#4040401A] border p-1">
              <Image
                src="/icons/heart2.svg"
                width={30}
                height={30}
                alt="heart"
              />
            </div>
          </div>
        </div>
      </div>

      <PriceTag
        title="J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue"
        price={300.0}
        price2={360.0}
        subtitle="This price is exclusive of taxes."
        text="Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy"
      />

      <ColorSelector selected={color} onSelect={setColor} />
      <ActionButtons quantity={qty} setQuantity={setQty} />
    </div>
  );
}
