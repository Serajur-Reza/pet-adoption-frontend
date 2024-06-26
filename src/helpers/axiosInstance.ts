// import { authKey } from "@/constants/authKey";
// import setAccessToken from "@/services/actions/setServerActions";
// import { generateNewAccessToken } from "@/services/auth.services";
// import { TResponseError, TResponseSuccess } from "@/types";
// import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { getAccessToken } from "@/utils/authInfo";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";

instance.defaults.headers["Accept"] = "application/json";

instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  // @ts-ignore
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    const responseObject: any = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // console.log(error);
    // return error;

    const config = error?.config;

    // if (error?.response?.status === 500 && !config?.sent) {
    //   config.sent = true;
    //   const response = await generateNewAccessToken();
    //   const accessToken = response?.data?.accessToken;
    //   config.headers["Authorization"] = accessToken;
    //   setToLocalStorage(authKey, accessToken);
    //   setAccessToken(accessToken);
    //   return instance(config);
    // }

    const responseObject: any = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something Went Wrong",
      errorMessages: error?.response?.data?.message,
    };
    return responseObject;
  }
);

export { instance };
