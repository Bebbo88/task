import { logout } from "@/services/authService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Header({ user }) {
  const router = useRouter();
  const handleLogout = () => {
    logout(localStorage.getItem("token")).finally(() => {
      localStorage.clear();
      toast.success("Logged out");
      router.push("/auth/login");
    });
  };
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Welcome, {user}</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition"
      >
        Logout
      </button>
    </header>
  );
}
