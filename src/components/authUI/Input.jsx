export default function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`w-full p-2 border text-black border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none ${className}`}
    />
  );
}
