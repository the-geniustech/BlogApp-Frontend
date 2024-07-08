import axios from "axios";
import Cookies from "js-cookie";

export const baseURL = "https://blogapi-kuvf.onrender.com/api/v1";

export const client = async (headers) => {
  const token = Cookies.get("authToken");

  if (!token) return axios.create({ baseURL });

  const defaultHeaders = {
    Authorization: "Bearer " + token,
    ...headers,
  };

  return axios.create({ baseURL, headers: defaultHeaders });
};

export default client;
