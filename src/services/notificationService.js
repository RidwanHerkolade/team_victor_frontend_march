import apiClient from "./apiClient";

export const getNotifications = async () => {
  const res = await apiClient.get("/notifications");
  return res.data;
};

export const markAsRead = async (id) => {
  const res = await apiClient.put(`/notifications/${id}`, {
    read: true,
  });
  return res.data;
};

export const deleteNotification = async (id) => {
  const res = await apiClient.delete(`/notifications/${id}`);
  return res.data;
};
