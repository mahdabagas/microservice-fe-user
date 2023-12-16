import { useState } from "react";
import LoginForm from "../feature/auth/components/LoginForm";
import RegisterForm from "../feature/auth/components/RegisterForm";

const LoginRegister = () => {
  const [showForm] = useState(false);
  return (
    <>
      <div className="hero h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="w-1/2 flex justify-center">
            {!showForm ? <LoginForm /> : <RegisterForm />}
          </div>
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Si Obe</h1>
            <p className="py-6 ">
              si-OBE is a web-based application for the management of student
              grades based on the OBE (Outcome Based Education) system.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
