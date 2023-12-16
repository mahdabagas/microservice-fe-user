import axios from "axios";

const createAxiosInstance = () => {
  const res = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
  });

  return res;
};

export { createAxiosInstance };
