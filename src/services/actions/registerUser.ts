// "use server";

import { baseUrl } from "@/constants";

export const registerUser = async (formData: any) => {
  let res;
  if (formData?.role === "ADMIN") {
    delete formData["role"];
    console.log(formData, "in line 8");
    res = await fetch(`${baseUrl}/create-admin`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "include",
    });
  } else if (formData?.role === "ADOPTOR") {
    delete formData["role"];
    console.log(formData, "in line 14");
    res = await fetch(`${baseUrl}/adoptor`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "include",
    });
  }

  const patientInfo = await res?.json();
  return patientInfo;
};
