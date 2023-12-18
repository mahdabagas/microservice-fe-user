import { useState } from "react";
import { register } from "../services/register";
import Form from "../../../components/Form";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    role: "student",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(() => true);
    try {
      const result = await register(form);
      if (result?.response?.data) {
        // return error register
        setError(() => "Terdapat kesalahan dalam registrasi");
        setLoading(() => false);
        return;
      }
      setLoading(() => false);

      setTimeout(() => {
        if (result) {
          window.location.reload();
        }
      });
      return clearTimeout;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        name={"Registrasi"}
        handleSubmit={handleRegister}
        form={form}
        setForm={setForm}
        error={error}
        loading={loading}
      />
    </>
  );
};

export default RegisterForm;
