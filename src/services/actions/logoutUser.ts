import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const logoutUser = (router: AppRouterInstance) => {
  localStorage.removeItem("accessToken");
  router.push("/");
  router.refresh();
};

export default logoutUser;
