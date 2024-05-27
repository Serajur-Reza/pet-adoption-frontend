// "use server";

import { baseUrl } from "@/constants";

export const registerUser = async (formData: any) => {
  const res = await fetch(`${baseUrl}/user`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(formData),
    credentials: "include",
  });

  const userInfo = await res?.json();
  return userInfo;
};
