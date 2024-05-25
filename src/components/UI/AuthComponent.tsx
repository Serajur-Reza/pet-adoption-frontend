import logoutUser from "@/services/actions/logoutUser";
import { getAccessToken } from "@/utils/authInfo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const AuthComponent = (props: Props) => {
  const token = getAccessToken();

  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };
  return (
    <>
      {token ? (
        <>
          {" "}
          <li role="none" className="flex items-stretch">
            <span
              className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 focus:outline-none focus-visible:outline-none lg:px-8"
              onClick={handleLogOut}
            >
              Logout
            </span>
          </li>
        </>
      ) : (
        <>
          <li role="none" className="flex items-stretch">
            <Link
              role="menuitem"
              aria-haspopup="false"
              className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 focus:outline-none focus-visible:outline-none lg:px-8"
              href={"/login"}
            >
              <span>Login</span>
            </Link>
          </li>

          <li role="none" className="flex items-stretch">
            <Link
              role="menuitem"
              aria-haspopup="false"
              className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 focus:outline-none focus-visible:outline-none lg:px-8"
              href={"/register"}
            >
              <span>Register</span>
            </Link>
          </li>
        </>
      )}
    </>
  );
};

export default AuthComponent;
