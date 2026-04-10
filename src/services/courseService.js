import apiClient from "./apiClient";

export const getCourses = async () => {
  const res = await apiClient.get("/courses");
  return res.data;
};

export const createCourse = async (data) => {
  const res = await apiClient.post("/courses", data);
  return res.data;
};

export const updatecourse = async (id, data) => {
  const res = await apiClient.put(`/course/${id}`, data);
  return res.data;
};

export const deleteCourse = async (id) => {
  const res = await apiClient.delete(`/courses/${id}`);
  return res.data;
};
