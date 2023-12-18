import { createAxiosInstance } from "../../api/Axiosinstance";

const axiosInstance = createAxiosInstance();

const getUserById = async (id) => {
  try {
    const result = await axiosInstance
      .get(`/users/${id}`)
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

export { getUserById };
