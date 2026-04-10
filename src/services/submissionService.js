import apiClient from "./apiClient";

export const submitAssignment = async (assignmentId, data) => {
  const res = await apiClient.post(`/assignments/${assignmentId}/submissions`, data);
  return res.data;
};

export const updateSubmission = async (assignmentId, id, data) => {
  const res = await apiClient.put(`/assignments/${assignmentId}/submissions/${id}`, data);
  return res.data;
};

export const deleteSubmission = async (assignmentId, id) => {
  const res = await apiClient.delete(`/assignments/${assignmentId}/submissions/${id}`);
  return res.data;
};
