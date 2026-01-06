import VerifyForm from "@/features/auth/components/VerifyForm";
import Card from "@/components/authUI/Card";
import Heading from "@/components/authUI/Heading";

export default function VerifyPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card>
        <Heading>Verify Email</Heading>
        <VerifyForm />
      </Card>
    </div>
  );
}
