export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 w-full max-w-sm mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
