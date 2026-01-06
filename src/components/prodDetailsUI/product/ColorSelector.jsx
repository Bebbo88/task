import SelectBox from "../layout/SelectBox";

export default function ColorSelector({ selected, onSelect }) {
  const colors = [
    "bg-[#D90202]",
    "bg-[#B8CCDA]",
    "bg-[#988755]",
    "bg-[#7198C8]",
    "bg-[#5D5D5B]",
  ];
  return (
    <div className="py-10 border-b border-[#E6E6E6] ">
      <SelectBox label="Type" value={"Cotton"} />
      <SelectBox label="Size" value={"2xl"} />

      <p className="text-2xl font-semibold mb-3"> Colors</p>
      <div className="flex space-x-3">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => onSelect(c)}
            className={`flex items-center justify-center w-12 h-12 rounded-full border border-[#F4F7F9] ${c} ${
              selected === c ? "ring-2 ring-offset-2 ring-black" : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
