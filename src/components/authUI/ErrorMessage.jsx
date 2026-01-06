export default function ErrorMessage({ message }) {
  if (!message) return null;
  return <p className="text-red-500 text-sm mt-2 text-center">{message}</p>;
}
