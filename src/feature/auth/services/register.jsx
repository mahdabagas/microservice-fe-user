import { createAxiosInstance } from "../../api/Axiosinstance";

const axiosInstance = createAxiosInstance();

const register = async ({ nama, role, email, password }) => {
  try {
    const result = await axiosInstance
      .post(
        "/users",
        JSON.stringify({
          nama,
          role,
          email,
          password,
        })
      )
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
