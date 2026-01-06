import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const RegisterSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid").required("Required"),
  mobile: Yup.string().required("Required"),
  mobile_country_code: Yup.string().required("Required"),
  password: Yup.string().min(6, "Min 6").required("Required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Match")
    .required("Required"),
});

export const VerifySchema = Yup.object({
  code: Yup.string()
    .required("Verification code is required")
    .matches(/^\d{6}$/, "Verification code must be 6 digits"),
});
