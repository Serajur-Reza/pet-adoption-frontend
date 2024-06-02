import { jwtDecode } from "jwt-decode";

export const getAccessToken = () => {
  // const token = localStorage.getItem("accessToken");
  // if (token) {
  //   return localStorage.getItem("accessToken");
  // }
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("accessToken");
  }
};

export const decodeToken = () => {
  const token = getAccessToken();
  if (token) {
    const data = jwtDecode(token as string);
    if (data?.exp * 1000 < Date.now()) {
      localStorage.removeItem("accessToken");
      return;
    }
    return data;
  }
};
