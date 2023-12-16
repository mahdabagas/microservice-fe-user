import { useState } from "react";
import { login } from "../services/login";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(() => true);

    try {
      const result = await login(form);
      if (result?.response?.data) {
        // return error register
        setError(() => "Username atau password salah");
        setLoading(() => false);
        return;
      }
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
      <form className="card shrink-0 max-w-md border shadow-md w-full rounded-md p-4" onSubmit={handleLogin}>
        <h1 className="text-xl font-medium">Masuk</h1>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            id="email"
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
            id="password"
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
            <span>Login</span>
          ) : (
            <span className="loading loading-spinner loading-xs "></span>
          )}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
