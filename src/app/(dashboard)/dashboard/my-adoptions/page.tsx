"use client";

import { useGetMyAdoptionsQuery } from "@/redux/api/apis/adoptionApi";
import { decodeToken } from "@/utils/authInfo";
import dayjs from "dayjs";
import React from "react";

type Props = {};

const MyAdoptionsPage = (props: Props) => {
  const userInfo = decodeToken();

  const { data: adoptions, isLoading } = useGetMyAdoptionsQuery({});

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          All My Adoptions
        </h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Adoption Date</th>
              <th className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {adoptions?.map((item, idx) => (
              <tr key={idx}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <img
                    src={item?.pet?.photos?.length ? item?.pet?.photos[0] : ""}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <span className="block text-gray-700 text-sm font-medium">
                      {item?.pet?.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {dayjs(item.createdAt).format("DD-MM-YYYY")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAdoptionsPage;
