import apiClient from "./apiClient";

export const getUserProfile = async () => {
  const res = await apiClient.get("/user/profile");
  return res.data;
};
