export default function SectionWrapper({ children, className = "" }) {
  return (
    <section className={` max-w-[1440px] mx-auto ${className}`}>
      {children}
    </section>
  );
}
