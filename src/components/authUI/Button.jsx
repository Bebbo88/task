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
      className={`w-full bg-blue-600 cursor-pointer text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50 ${className}`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
