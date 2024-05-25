// "use server";

export const registerUser = async (formData: any) => {
  let res;
  if (formData?.role === "ADMIN") {
    delete formData["role"];
    console.log(formData, "in line 8");
    res = await fetch(`http://localhost:3000/api/create-admin`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "include",
    });
  } else if (formData?.role === "ADOPTOR") {
    delete formData["role"];
    console.log(formData, "in line 14");
    res = await fetch(`http://localhost:3000/api/adoptor`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "include",
    });
  }

  const patientInfo = await res?.json();
  return patientInfo;
};
