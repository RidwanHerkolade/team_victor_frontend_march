import apiClient from "./apiClient";

export const register = async (data) => {
  const res = await apiClient.post("/register", data);
  return res.data;
};

export const login = async (data) => {
  const res = await apiClient.post("/login", data);

  if (res.data.token) {
    localStorage.setItem("truemind_token", res.data.token);
  }

  return res.data;
};

export const logout = () => {
  localStorage.removeItem("truemind_token");
};
