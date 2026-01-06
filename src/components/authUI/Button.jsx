export default function Button({
  children,
  isLoading,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      type="submit"
      disabled={isLoading || props.disabled}
      className={`w-full bg-[#BE968E] cursor-pointer text-white p-2 rounded hover:bg-[#BE968E]/80 disabled:opacity-50 ${className}`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
