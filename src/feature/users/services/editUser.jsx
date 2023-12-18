import { createAxiosInstance } from "../../api/Axiosinstance";

const axiosInstance = createAxiosInstance();

const editUser = async (form, id) => {
  try {
    const result = await axiosInstance
      .patch(`/users/${id}`, form)
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

export { editUser };
