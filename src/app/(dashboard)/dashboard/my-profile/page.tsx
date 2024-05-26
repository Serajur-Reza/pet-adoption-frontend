"use client";

import { useMyProfileQuery } from "@/redux/api/apis/authApi";
import React from "react";

type Props = {};

const MyProfilePage = (props: Props) => {
  const { data, isLoading } = useMyProfileQuery({});

  console.log(data);
  if (isLoading) {
    <div>Loading...</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {" "}
        <div>
          {" "}
          <h1 className="font-semibold text-xl">Name</h1>
          <h3 className="text-lg">{data?.data?.name}</h3>
        </div>
        <div>
          {" "}
          <h1 className="font-semibold text-xl">Email</h1>
          <h3 className="text-lg">{data?.data?.email}</h3>
        </div>
        <div>
          {" "}
          <h1 className="font-semibold text-xl">Username</h1>
          <h3 className="text-lg">{data?.data?.username}</h3>
        </div>
        <div>
          {" "}
          <h1 className="font-semibold text-xl">Role</h1>
          <h3 className="text-lg">{data?.data?.role}</h3>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
