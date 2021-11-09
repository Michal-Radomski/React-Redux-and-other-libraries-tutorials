import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const getUsers = () => api.get("/users").then((res) => res.data);

export const getUser = (id) => api.get(`/users/${id}`).then((res) => res.data);

export const updateUser = ({id, ...updatedUsers}) => api.put(`/users/${id}`, updateUser).then((res) => res.data);
