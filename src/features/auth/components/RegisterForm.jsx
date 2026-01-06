"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import { RegisterSchema } from "@/features/auth/schemas";
import { handleRegister } from "@/features/auth/helpers/formHandlers";
import Button from "@/components/authUI/Button";
import FormikInput from "@/components/authUI/FormikInput";
import ErrorMessage from "@/components/authUI/ErrorMessage";

export default function RegisterForm() {
  const [e, setE] = useState("");
  const r = useRouter();
  const flds = [
    "name",
    "email",
    "mobile",
    "mobile_country_code",
    "password",
    "password_confirmation",
  ];
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        country_code: "",
        password: "",
        password_confirmation: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(v, h) => handleRegister(v, h, r, setE)}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-2">
          {flds.map((f) => (
            <FormikInput
              key={f}
              name={f}
              type={f.includes("pass") ? "password" : "text"}
              placeholder={f.replace("_", " ")}
            />
          ))}
          <ErrorMessage message={e} />
          <Button isLoading={isSubmitting}>Register</Button>
        </Form>
      )}
    </Formik>
  );
}
