"use client";

import React from "react";
import { adminRoutes, commonRoutes, navsFooter } from "./SidebarItems";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logoutUser from "@/services/actions/logoutUser";
import { decodeToken } from "@/utils/authInfo";

export default function Sidebar() {
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };

  const userInfo = decodeToken();

  console.log(userInfo);

  return (
    <>
      <nav className="fixed top-0 left-0 w-[230px]  h-full border-r bg-white space-y-8 ">
        <div className="flex flex-col h-full">
          <div className="h-20 flex items-center px-8 bg-slate-200">
            <Link href="/" className="flex-none">
              Pet Adoption
            </Link>
          </div>
          <div className="flex-1 flex flex-col h-full overflow-auto">
            <ul className="px-4 text-sm font-medium flex-1">
              {commonRoutes.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item?.href}
                    className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                  >
                    <div className="text-gray-500">{item?.icon}</div>
                    {item.name}
                  </Link>
                </li>
              ))}

              {userInfo?.role === "ADMIN" &&
                adminRoutes.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item?.href}
                      className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                    >
                      <div className="text-gray-500">{item?.icon}</div>
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
            <div>
              <ul className="px-4 pb-4 text-sm font-medium">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              onClick={handleLogOut}
              className="flex items-center gap-x-2  cursor-pointer px-6 pb-4 text-sm font-sm"
            >
              <div className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                  onClick={() => {
                    localStorage.removeItem("accessToken");
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </div>
              <span>Logout</span>
            </div>

            <Link
              href={"/dashboard/my-profile"}
              className="py-4 px-4 border-t cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div>
                  <span className="block text-gray-700 text-sm font-semibold">
                    {userInfo?.name}
                  </span>
                  <span className="block mt-px text-gray-600 hover:text-indigo-600 text-xs">
                    View profile
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
