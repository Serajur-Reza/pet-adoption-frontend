"use client";

import { useAllUsersQuery } from "@/redux/api/apis/authApi";

const UsersPage = () => {
  const { data, isLoading } = useAllUsersQuery({});

  console.log(data);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All Users
          </h3>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Username</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Role</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {data?.data?.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.isActivated ? "Active" : "Inactive"}
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    type="button"
                    // href="javascript:void()"
                    className={`py-2 px-3 font-medium  duration-150 hover:bg-gray-50 rounded-lg ${
                      item?.isActivated
                        ? "text-indigo-600 hover:text-indigo-500"
                        : "text-red-600 hover:text-red-500"
                    }`}
                  >
                    {item?.isActivated ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
