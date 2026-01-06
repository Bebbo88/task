import Image from "next/image";

export default function SelectBox({ label, value }) {
  return (
    <div className="w-96 relative flex flex-col gap-2 mb-5">
      <label className="absolute left-6 top-[-10px] px-2 bg-white text-sm text-gray-700 z-10">
        {label}
      </label>

      <div className=" flex items-center justify-between border border-gray-300 rounded-2xl px-6 py-4 cursor-pointer">
        <span className=" font-semibold ">{value}</span>

        <Image src="/icons/arrow-down.svg" alt="Arrow" width={15} height={15} />
      </div>
    </div>
  );
}
