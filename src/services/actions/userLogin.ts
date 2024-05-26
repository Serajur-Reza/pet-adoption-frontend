import { baseUrl } from "@/constants";
import { FieldValues } from "react-hook-form";
// import setAccessToken from "./setServerActions";

export const userLogin = async (data: FieldValues) => {
  console.log(data);
  const res = await fetch(`${baseUrl}/login`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
  });

  const userInfo = await res.json();

  console.log(userInfo);

  return userInfo;
};
