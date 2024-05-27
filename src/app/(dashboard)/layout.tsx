"use client";

import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import { getAccessToken } from "@/utils/authInfo";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = (props: Props) => {
  const { children } = props;

  const router = useRouter();
  const token = getAccessToken();

  if (!token) {
    return router.push("/");
  }

  return (
    <>
      <Sidebar />
      <div className="ml-[250px] mt-[20px]">{children}</div>
    </>
  );
};

export default DashboardLayout;
