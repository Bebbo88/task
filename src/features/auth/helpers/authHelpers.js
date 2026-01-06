import toast from "react-hot-toast";
export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const handleApiError = (error, setError) => {
  let msg = "An unexpected error occurred.";
  if (error.response?.data?.message) {
    const m = error.response.data.message;
    msg = typeof m === "object" ? Object.values(m).join(", ") : m;
  }
  toast.error(msg);
  if (setError) setError(msg);
};
