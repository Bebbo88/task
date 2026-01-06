export default function PriceTag({ title, price, price2, subtitle, text }) {
  return (
    <div className="border-b border-[#E6E6E6] pb-6">
      <h5 className="text-[24px] font-bold mb-2">{title}</h5>
      <div className="flex items-center space-x-2"></div>
      <div className="flex items-center space-x-2">
        <div className="text-3xl ">${price}</div>
        <div className="text-2xl line-through text-[#8A8A8A] ">${price2}</div>
      </div>
      <p className="text-sm mb-5">{subtitle}</p>
      <p>{text}</p>
    </div>
  );
}
