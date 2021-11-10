import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getUsers = () => api.get("/users").then((res) => res.data);

export const getUser = (id: number) => api.get(`/users/${id}`).then((res) => res.data);

export const updateUser = ({id, ...updatedUser}: {id: number; updatedUser: User}) =>
  api.put(`/users/${id}`, updatedUser).then((res) => res.data);
