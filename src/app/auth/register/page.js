import RegisterForm from "@/features/auth/components/RegisterForm";
import Card from "@/components/authUI/Card";
import Heading from "@/components/authUI/Heading";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card>
        <Heading>Register</Heading>
        <RegisterForm />
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}
