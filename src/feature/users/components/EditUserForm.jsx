import { useEffect, useState } from "react";
import Form from "../../../components/Form";
import { editUser } from "../services/editUser";
import { getUserById } from "../services/getUserById";
import { useNavigate, useParams } from "react-router-dom";

const EditUserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    role: "student",
    email: "",
  });

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDataById = async () => {
      try {
        const result = await getUserById(id);
        if (result?.response?.data) {
          setError("Kesalahan dalam melakukan Edit");
          return;
        }
        setForm((prev) => ({ ...prev, name: result.data.data.name }));
        setForm((prev) => ({ ...prev, role: result.data.data.role }));
        setForm((prev) => ({ ...prev, email: result.data.data.email }));
      } catch (error) {
        console.log(error);
      }
    };
    getDataById();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(() => true);
    try {
      const result = await editUser(form, id);
      if (result?.response?.data) {
        // return error register
        setError(() => "Terdapat kesalahan dalam mengedit akun");
        console.log(result);
        setLoading(() => false);
        return;
      }
      setLoading(() => false);

      navigate("/users");

      return clearTimeout;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      name="Update"
      handleSubmit={handleUpdate}
      form={form}
      setForm={setForm}
      loading={loading}
      error={error}
      update={true}
    />
  );
};

export default EditUserForm;
