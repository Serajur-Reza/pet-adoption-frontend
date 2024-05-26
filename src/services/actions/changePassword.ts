import { baseUrl } from "@/constants";
import { getAccessToken } from "@/utils/authInfo";
import { FieldValues } from "react-hook-form";
// import setAccessToken from "./setServerActions";

export const changePassword = async (data: FieldValues) => {
  const token = getAccessToken();
  const res = await fetch(`${baseUrl}/change-password`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
  });

  const userInfo = await res.json();

  console.log(userInfo);

  return userInfo;
};
