import LoginForm from "@/features/auth/components/LoginForm";
import Card from "@/components/authUI/Card";
import Heading from "@/components/authUI/Heading";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card>
        <Heading>Login</Heading>
        <LoginForm />
        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
}
