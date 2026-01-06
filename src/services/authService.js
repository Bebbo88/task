import api from "./api";

export const login = (data) => api.post("/auth/login", data);

export const register = (data) => api.post("/auth/register", data);

export const verifyEmail = async (data) => {
  const token = localStorage.getItem("verifyToken");

  return api.post("/auth/verify-email", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const resendCode = (email) => {
  const token = localStorage.getItem("verifyToken");

  return api.post(
    "/auth/verify-email/resend-code",
    { email },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const logout = (token) =>
  api.post(
    "/auth/logout",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

export const getUserData = (token) =>
  api.get("/auth/user-data", { headers: { Authorization: `Bearer ${token}` } });
