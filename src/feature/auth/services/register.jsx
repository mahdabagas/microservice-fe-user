import { createAxiosInstance } from "../../api/Axiosinstance";

const axiosInstance = createAxiosInstance();

const register = async (form) => {
  try {
    const result = await axiosInstance
      .post("/users", form)
      .then((result) => {
        return result;
      })
      .catch((result) => {
        return result;
      });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export { register };
