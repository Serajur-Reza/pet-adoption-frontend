import { jwtDecode } from "jwt-decode";

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const decodeToken = () => {
  const token = getAccessToken();
  const data = jwtDecode(token as string);
  if (data.exp * 1000 < Date.now()) {
    console.log(data.exp * 1000, Date.now());
    localStorage.removeItem("accessToken");
    return;
  }
  return data;
};
