import { jwtDecode } from "jwt-decode";

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const decodeToken = () => {
  const token = getAccessToken();
  return jwtDecode(token as string);
};
