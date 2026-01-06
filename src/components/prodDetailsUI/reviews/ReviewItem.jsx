import Image from "next/image";

export default function ReviewItem() {
  return (
    <div className="py-8 border-b border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-base text-black">Alex Daewn</span>

          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                key={i}
                src="/icons/star.svg"
                alt="star"
                width={16}
                height={16}
                className="opacity-80"
              />
            ))}
          </div>
        </div>

        <span className="text-sm text-gray-400">4 months ago</span>
      </div>

      <p className="text-sm leading-6 max-w-4xl">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit, sed
      </p>
    </div>
  );
}
