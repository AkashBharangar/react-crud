import axios from "axios";

const API_URL = "https://6991745a6279728b01548b48.mockapi.io/users/:endpoint";

export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createUser = async (user) => {
  const res = await axios.post(API_URL, user);
  return res.data;
};

export const updateUser = async (id, user) => {
  const res = await axios.put(`${API_URL}/${id}`, user);
  return res.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
