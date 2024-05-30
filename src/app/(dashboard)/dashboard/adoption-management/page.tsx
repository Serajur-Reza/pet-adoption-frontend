"use client";

import {
  useGetAllAdoptionsQuery,
  useUpdateAdoptionMutation,
} from "@/redux/api/apis/adoptionApi";
import { useAllPetsQuery } from "@/redux/api/apis/petApi";
import { decodeToken } from "@/utils/authInfo";
import dayjs from "dayjs";
import React from "react";

type Props = {};

const AdoptionsPage = (props: Props) => {
  const userInfo = decodeToken();

  const { data: adoptions, isLoading } = useGetAllAdoptionsQuery({});

  const [updateAdoption] = useUpdateAdoptionMutation();

  const editAdoptionStatusHandler = async (data: any) => {
    console.log(data);
    const res = await updateAdoption({ id: data.id, body: data.body });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          All Adoptions
        </h3>
        <p className="text-gray-600 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Adoption Date</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6"></th>
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
                {userInfo?.role === "ADMIN" && (
                  <td>
                    <div className="relative w-30 max-w-full mx-auto ">
                      <select
                        className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2"
                        onChange={(e) =>
                          editAdoptionStatusHandler({
                            id: item.id,
                            body: {
                              status: e.target.value,
                            },
                          })
                        }
                      >
                        <option value="PENDING">PENDING</option>
                        <option value="APPROVED">APPROVED</option>
                        <option value="REJECTED">REJECTED</option>
                      </select>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdoptionsPage;
