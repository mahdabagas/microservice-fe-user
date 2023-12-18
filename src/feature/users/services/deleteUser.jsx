import { createAxiosInstance } from "../../api/Axiosinstance";

const axiosInstance = createAxiosInstance();

const deleteUser = async (id) => {
  try {
    const result = await axiosInstance
      .delete(`/users/${id}`)
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

export { deleteUser };
