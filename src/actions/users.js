import { REGISTER_USER, LOGIN_USER } from "./actionType";

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user
})