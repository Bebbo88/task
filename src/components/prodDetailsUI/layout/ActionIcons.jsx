import Image from "next/image";

export default function ActionIcons({ mobile = false }) {
  const svgs = [
    "/icons/shopping bag.svg",
    "/icons/vector.svg",
    "/icons/love.svg",
    "/icons/mingcute_down-line.svg",
    "/icons/Frame 1000005106.svg",
  ];

  return (
    <div
      className={
        mobile
          ? "flex items-center justify-between px-20 py-2"
          : "flex items-center space-x-6"
      }
    >
      <Image src={svgs[0]} alt="Cart" width={20} height={20} />
      <Image src={svgs[1]} alt="Search" width={16} height={16} />
      <Image src={svgs[2]} alt="Wishlist" width={20} height={20} />

      <div className="flex items-center gap-1">
        <p className="text-xs">EN</p>
        <Image src={svgs[3]} alt="Lang" width={16} height={16} />
      </div>

      <Image src={svgs[4]} alt="User" width={44} height={24} />
    </div>
  );
}
