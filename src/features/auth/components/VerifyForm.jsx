"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import { resendCode } from "@/services/authService";
import { VerifySchema } from "@/features/auth/schemas";
import { handleVerify } from "@/features/auth/helpers/formHandlers";
import Button from "@/components/authUI/Button";
import FormikInput from "@/components/authUI/FormikInput";
import ErrorMessage from "@/components/authUI/ErrorMessage";
import toast from "react-hot-toast";

export default function VerifyForm() {
  const [msg, setMsg] = useState("");
  const router = useRouter();

  return (
    <Formik
      initialValues={{ code: "" }}
      validationSchema={VerifySchema}
      onSubmit={(v) => handleVerify(v, router, setMsg)}
    >
      {({ values }) => (
        <Form className="space-y-4">
          <FormikInput name="code" placeholder="Code" />
          <ErrorMessage message={msg} />
          <Button>Verify</Button>
          <button
            type="button"
            onClick={() => {
              resendCode(values.email);
              toast.success("Code resent successfully");
            }}
            className="text-sm cursor-pointer text-[#BE968E] w-full hover:underline"
          >
            Resend Code
          </button>
        </Form>
      )}
    </Formik>
  );
}
