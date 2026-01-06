import Image from "next/image";

export default function AfterHero() {
  return (
    <>
      <div className="w-full bg-[#ECECEC66] flex items-center gap-1 py-4 ps-8 rounded-xl">
        <p>Home</p>
        <Image src="/icons/arrow.svg" alt="arrow" width={24} height={24} />
        <p>Our Category</p>
        <Image src="/icons/arrow.svg" alt="arrow" width={24} height={24} />
        <p className="text-[#8A8A8A]">Product Details</p>
      </div>
    </>
  );
}
