"use client";

import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = (props: Props) => {
  const { children } = props;

  const router = useRouter();

  //   if (!isLoggedIn()) {
  //     return router.push("/login");
  //   }

  return (
    <>
      <Sidebar />
      <div className="ml-[50px]">{children}</div>
    </>
  );
};

export default DashboardLayout;
