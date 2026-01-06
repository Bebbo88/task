import SimilarCard from "./SimilarCard";

export default function SimilarItems() {
  const images = [
    "/images/prod1.png",
    "/images/prod2.png",
    "/images/prod3.png",
    "/images/prod4.png",
    "/images/prod4.png",
  ];

  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold mb-8">
        Similar Items
        <span className="block w-12 h-[3px] rounded bg-[#BE968E] mt-2" />
      </h2>

      <div className="flex gap-6 overflow-hidden">
        {images.map((img, i) => (
          <SimilarCard key={i} image={img} discount={i % 2 === 1} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <button className="w-12 h-12 text-2xl rounded-full bg-[#E8EDF2] flex items-center justify-center">
          ‹
        </button>
        <button className="w-12 h-12 text-2xl rounded-full bg-[#BE968E] text-white flex items-center justify-center">
          ›
        </button>
      </div>
    </section>
  );
}
