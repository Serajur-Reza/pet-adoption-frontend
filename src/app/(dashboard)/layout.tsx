"use client";

// import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import { getAccessToken } from "@/utils/authInfo";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = (props: Props) => {
  const Sidebar = dynamic(
    () => import("@/components/dashboard/Sidebar/Sidebar"),
    {
      ssr: false,
    }
  );
  const { children } = props;

  const router = useRouter();
  const token = getAccessToken();

  if (!token) {
    router.push("/");
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <div className="ml-[250px] mt-[20px]">{children}</div>
        </div>
      </Suspense>
    </>
  );
};

export default DashboardLayout;
