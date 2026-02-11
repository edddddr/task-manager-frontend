import api from "./axios";

export const fetchProjects = async (page = 1) => {
  const response = await api.get(`/projects/?page=${page}`);
  return response.data;
};

export const createProject = async (data) => {
  const response = await api.post("/projects/", data);
  return response.data;
};
