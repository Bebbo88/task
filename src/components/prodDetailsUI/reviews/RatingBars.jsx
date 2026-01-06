import Image from "next/image";

export default function RatingBars() {
  const rows = [
    { star: 5, percent: "67%" },
    { star: 4, percent: "15%" },
    { star: 3, percent: "6%" },
    { star: 2, percent: "3%" },
    { star: 1, percent: "9%" },
  ];

  return (
    <div className="w-[484px] h-[182px] flex flex-col justify-between mt-10 md:mt-16">
      {rows.map((row) => (
        <div key={row.star} className="flex items-center gap-4">
          <div className="flex items-center gap-1 w-[32px]">
            <Image src="/icons/star.svg" alt="star" width={24} height={24} />

            <span className="text-sm">{row.star}</span>
          </div>
          <div className="relative w-[320px] h-[6px] bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`absolute left-0 top-0 h-full  bg-[#BE968E]`}
              style={{ width: row.percent }}
            />
          </div>

          <span className="text-sm text-gray-500 w-[36px] text-right">
            {row.percent}
          </span>
        </div>
      ))}
    </div>
  );
}
