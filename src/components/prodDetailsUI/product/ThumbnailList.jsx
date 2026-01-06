export default function ThumbnailList({ images, selected, onSelect }) {
  return (
    <div className="flex gap-5 pt-3">
      {images.map((img, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(img)}
          className={`w-40 h-40  bg-[#F5F5F5] border rounded-xl overflow-hidden ${
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
      ))}
    </div>
  );
}
