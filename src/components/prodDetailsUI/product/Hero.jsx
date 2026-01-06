import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="relative ">
        <div className="relative w-full h-[284px]">
          <Image
            src="/images/hero.jpg"
            alt="Hero"
            fill
            className="object-cover opacity-5"
            priority
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[60px] md:w-[628px] md:h-[120px] ">
          <Image
            src="/icons/Product Details.svg"
            alt="Product Details"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute top-1/2 left-2/3 -translate-x-50 md:-translate-x-60 lg:-translate-x-95 -translate-y-5  w-[400px] h-[60px] md:w-[628px] md:h-[120px] ">
          <h3 className="text-[32px] font-bold">Product Details</h3>
        </div>
      </div>
    </>
  );
}
