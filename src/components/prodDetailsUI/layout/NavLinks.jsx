import Image from "next/image";

export default function NavLinks({ mobile = false }) {
  const links = ["Shop", "On Sale", "New Arrivals", "Brands"];
  const svgs = [
    "/icons/home 04.svg",
    "/icons/apps.svg",
    "/icons/interactive.svg",
    "/icons/id card.svg",
  ];

  return (
    <nav
      className={
        mobile ? "flex flex-col gap-2 px-6 py-4" : "hidden md:flex space-x-8"
      }
    >
      {links.map((link, i) => (
        <div
          key={link}
          className={
            mobile
              ? "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition"
              : "flex items-center space-x-2"
          }
        >
          <Image src={svgs[i]} alt={link} width={20} height={20} />
          <a className="text-gray-600 font-medium text-sm">{link}</a>
        </div>
      ))}
    </nav>
  );
}
