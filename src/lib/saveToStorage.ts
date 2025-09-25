import { UserDTO } from "../types";

export const saveUser = (user: UserDTO) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const getUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const removeUser = () => {
  localStorage.removeItem("user");
};