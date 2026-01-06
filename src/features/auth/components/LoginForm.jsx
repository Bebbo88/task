"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import { LoginSchema } from "@/features/auth/schemas";
import { handleLogin } from "@/features/auth/helpers/formHandlers";
import Button from "@/components/authUI/Button";
import FormikInput from "@/components/authUI/FormikInput";
import ErrorMessage from "@/components/authUI/ErrorMessage";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(v, h) => handleLogin(v, h, router, setError)}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <FormikInput name="email" placeholder="Email" />
          <FormikInput name="password" type="password" placeholder="Password" />
          <ErrorMessage message={error} />
          <Button type="submit" isLoading={isSubmitting}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}
