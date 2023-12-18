import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardUser from "./pages/DashboardUser";
import LoginRegister from "./pages/LoginRegister";
import EditUserForm from "./feature/users/components/EditUserForm";
import RegisterForm from "./feature/auth/components/RegisterForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/users" element={<DashboardUser />} />
        <Route path="/users/:id" element={<EditUserForm />} />
        <Route path="/users/add" element={<RegisterForm />} />
      </Routes>
    </>
  );
}

export default App;
