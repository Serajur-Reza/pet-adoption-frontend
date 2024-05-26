"use client";

import {
  useAllUsersQuery,
  useEditUserMutation,
} from "@/redux/api/apis/authApi";

const UsersPage = () => {
  const { data, isLoading } = useAllUsersQuery({});

  console.log(data);

  const [editUser] = useEditUserMutation();

  const editStatusHandler = async (data: any) => {
    console.log(data);
    const res = await editUser(data);
    console.log(res);
  };

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
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {data?.map((item, idx) => (
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
                        ? "text-red-600 hover:text-red-500"
                        : "text-indigo-600 hover:text-indigo-500"
                    }`}
                    onClick={() =>
                      editStatusHandler({
                        id: item.id,
                        body: {
                          isActivated: !item?.isActivated,
                        },
                      })
                    }
                  >
                    {item?.isActivated ? "Deactivate" : "Activate"}
                  </button>
                </td>
                <td>
                  <div className="relative w-30 max-w-full mx-auto ">
                    <select
                      className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2"
                      onChange={(e) =>
                        editStatusHandler({
                          id: item.id,
                          body: {
                            role: e.target.value,
                          },
                        })
                      }
                    >
                      <option value="" disabled selected></option>
                      <option value="ADOPTOR">Adoptor</option>
                      <option value="ADMIN">Admin</option>
                    </select>
                  </div>
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
