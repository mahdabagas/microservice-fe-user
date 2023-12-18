import { useState } from "react";
import LoginForm from "../feature/auth/components/LoginForm";
import RegisterForm from "../feature/auth/components/RegisterForm";

const LoginRegister = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row py-6">
          <div className="text-center lg:self-start lg:text-left w-1/2 ">
            <h1 className="text-5xl font-bold">Si Obe</h1>
            <p className="py-6 ">
              si-OBE is a web-based application for the management of student
              grades based on the OBE (Outcome Based Education) system.
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            {!showForm ? <LoginForm /> : <RegisterForm />}
            <div className="flex pt-2 gap-2">
              {!showForm ? (
                <>
                  <p>Belum memiliki akun?</p>
                  <span
                    className="font-medium text-primary cursor-pointer"
                    onClick={() => setShowForm((prev) => !prev)}
                  >
                    Register
                  </span>
                </>
              ) : (
                <>
                  <p>Sudah memiliki akun?</p>
                  <span
                    className="font-medium text-primary cursor-pointer"
                    onClick={() => setShowForm((prev) => !prev)}
                  >
                    Login
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
