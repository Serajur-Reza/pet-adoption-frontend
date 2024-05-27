import { MdOutlinePets, MdOutlinePassword } from "react-icons/md";
import { FaUser } from "react-icons/fa";

export const commonRoutes = [
  {
    href: "/dashboard/pets",
    name: "Pets",
    icon: <MdOutlinePets />,
  },
  {
    href: "/dashboard/my-pets",
    name: "My Pets",
    icon: <MdOutlinePets />,
  },

  {
    href: "/dashboard/pet-management",
    name: "Pet Management",
    icon: <MdOutlinePets />,
  },
];

export const adminRoutes = [
  {
    href: "/dashboard/create-pet",
    name: "Create Pet",
    icon: <MdOutlinePets />,
  },
  {
    href: "/dashboard/adoption-management",
    name: "Adoption Management",
    icon: <MdOutlinePets />,
  },
  {
    href: "/dashboard/user-management",
    name: "User Management",
    icon: <FaUser />,
  },
];

export const navsFooter = [
  {
    href: "/change-password",
    name: "change-password",
    icon: <MdOutlinePassword />,
  },
  // {
  //   href: "/",
  //   name: "Logout",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       strokeWidth={1.5}
  //       stroke="currentColor"
  //       className="w-5 h-5"
  //       onClick={() => {
  //         localStorage.removeItem("accessToken");
  //       }}
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
  //       />
  //     </svg>
  //   ),
  // },
];
