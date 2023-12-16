import { useState } from "react";
import { register } from "../services/register";

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
      <form
        className="card shrink-0 max-w-md border shadow-md bg-white rounded-lg p-4 w-full"
        onSubmit={handleRegister}
      >
        <h1 className="text-xl font-medium ">Registrasi</h1>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Nama</span>
          </div>
          <input
            id="name"
            type="text"
            placeholder="Masukan nama"
            className="input input-bordered input-primary w-full"
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
        </label>
        <div className="form-control w-full">
          <div className="label">
            <span className="label-text">Pekerjaan</span>
          </div>
          <div className="flex gap-3 w-full">
            <label className="label cursor-pointer w-full">
              <input
                type="radio"
                name="radio-10"
                className="radio peer hidden"
                value="student"
                checked={form.role === "student"}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, role: e.target.value }))
                }
              />
              <span className="label-text w-full border border-primary px-6 py-2 rounded-md peer-checked:bg-primary peer-checked:text-white">
                Student
              </span>
            </label>
            <label className="label cursor-pointer w-full">
              <input
                type="radio"
                name="radio-10"
                className="radio peer hidden"
                value="teacher"
                checked={form.role === "teacher"}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, role: e.target.value }))
                }
              />
              <span className="label-text w-full border border-primary px-6 py-2 rounded-md peer-checked:bg-primary peer-checked:text-white">
                Teacher
              </span>
            </label>
          </div>
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            placeholder="example@email.com"
            className="input input-bordered input-primary w-full"
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="text"
            placeholder="********"
            className="input input-bordered input-primary w-full"
            onChange={(e) =>
              setForm((prev) => ({ ...prev, password: e.target.value }))
            }
            required
          />
        </label>
        <div className="h-4 w-full pt-1">
          {error && (
            <p className="text-end text-error font-medium text-xs">{error}</p>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-md mt-4 w-full"
          disabled={loading}
        >
          {!loading ? (
            <span>Register</span>
          ) : (
            <span className="loading loading-spinner loading-xs"></span>
          )}
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
