import apiClient from "./apiClient";

export const getAssignmentsByCourse = async (courseId) => {
  const res = await apiClient.get(`/courses/${courseId}/assignments`);
  return res.data;
};

export const createAssignment = async (courseId, data) => {
  const res = await apiClient.post(`/courses/${courseId}/assignments`, data);
  return res.data;
};

export const updateAssignment = async (courseId, id, data) => {
  const res = await apiClient.put(`/courses/${courseId}/assignments/${id}`, data);
  return res.data;
};

export const deleteAssignment = async (courseId, id) => {
  const res = await apiClient.delete(`/courses/${courseId}/assignments/${id}`);
  return res.data;
};
