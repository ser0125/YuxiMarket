import { REGISTER_USER } from "./actionType";

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});