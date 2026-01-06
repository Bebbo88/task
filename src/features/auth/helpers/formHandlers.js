import { login, register, verifyEmail } from "@/services/authService";
import { handleApiError } from "./authHelpers";
import toast from "react-hot-toast";

export const handleLogin = async (
  values,
  { setSubmitting },
  router,
  setError
) => {
  try {
    const { data: res } = await login(values);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res?.data?.name));
    toast.success("Login Successful! Welcome back.");
    router.push("/dashboard");
  } catch (err) {
    handleApiError(err, setError);
  } finally {
    setSubmitting(false);
  }
};

export const handleRegister = async (
  values,
  { setSubmitting },
  router,
  setErr
) => {
  try {
    const { data: res } = await register(values);
    localStorage.setItem("verifyToken", res.data.token);
    localStorage.setItem("email", res.data.email);
    toast.success("Registration successful. Please verify your email.");
    router.push("/auth/verify-email");
  } catch (error) {
    handleApiError(error, setErr);
  } finally {
    setSubmitting(false);
  }
};

export const handleVerify = async (values, router, setMsg) => {
  try {
    const email = localStorage.getItem("email");
    await verifyEmail({ ...values, email });
    localStorage.removeItem("verifyToken");
    localStorage.removeItem("email");
    toast.success("Email Verified! Please login.");
    router.push("/auth/login");
  } catch (err) {
    handleApiError(err, setMsg);
  }
};
