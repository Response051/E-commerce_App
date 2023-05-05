import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Components/FirstPage/SignUpPage";
import LoginPage from "./Components/FirstPage/LoginPage";
import ForgetPasswordPage from "./Components/FirstPage/ForgetPasswordPage";

function App() {
  return (
    <Routes>
      <Route index element={<SignUpPage />} />
      <Route path="Login" element={<LoginPage />} />
      <Route path="ForgetPasswordPage" element={<ForgetPasswordPage />} />
    </Routes>
  );
}

export default App;
