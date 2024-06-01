"use client";

import React, { useState } from "react";
import UpdateProfileModal from "./components/updateProfileModal";
import { useMyProfileQuery } from "@/redux/api/apis/userApi";

const MyProfilePage = () => {
  const { data, isLoading } = useMyProfileQuery({});

  const [isShowing, setIsShowing] = useState(false);

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
          <h3 className="text-lg">{data?.name}</h3>
        </div>
        <div>
          {" "}
          <h1 className="font-semibold text-xl">Email</h1>
          <h3 className="text-lg">{data?.email}</h3>
        </div>
        <div>
          {" "}
          <h1 className="font-semibold text-xl">Username</h1>
          <h3 className="text-lg">{data?.username}</h3>
        </div>
        <div>
          {" "}
          <h1 className="font-semibold text-xl">Role</h1>
          <h3 className="text-lg">{data?.role}</h3>
        </div>
        <button
          className="inline-flex items-center justify-center h-10 w-[150px] gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          onClick={() => setIsShowing(true)}
        >
          <span>Update Profile</span>
        </button>
      </div>

      <UpdateProfileModal
        userInfo={data}
        isShowing={isShowing}
        setIsShowing={setIsShowing}
      />
    </div>
  );
};

export default MyProfilePage;
