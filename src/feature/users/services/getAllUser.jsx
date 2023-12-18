import { createAxiosInstance } from "../../api/Axiosinstance";

const axiosInstance = createAxiosInstance();

const getAllUser = async () => {
  try {
    const result = await axiosInstance
      .get("/users")
      .then((result) => {
        return result;
      })
      .catch((result) => {
        return result;
      });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getAllUser };
