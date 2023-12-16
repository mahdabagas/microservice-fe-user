import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardUser from "./pages/DashboardUser";
import LoginRegister from "./pages/LoginRegister";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/user" element={<DashboardUser />} />
      </Routes>
    </>
  );
}

export default App;
