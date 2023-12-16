import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardUser from "./pages/DashboardUser";
import LoginRegister from "./pages/LoginRegister";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/user" element={<DashboardUser />} />
      </Routes>
    </div>
  );
}

export default App;
