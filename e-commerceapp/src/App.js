import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import SignUpPage from "./Components/FirstPage/SignUpPage";
// import LoginPage from "./Components/FirstPage/LoginPage";
// import ForgetPasswordPage from "./Components/FirstPage/ForgetPasswordPage";
import Visual from "./Components/Visual-Search-Page/Visual";

function App() {
  return (
    <div>
      {/* the routes are the main file here,, plsease ensure u reimplement the ,broswerRouter in the index.js */}
      {/* <Routes>
        <Route index element={<SignUpPage />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="ForgetPasswordPage" element={<ForgetPasswordPage />} />
      </Routes> */}
      <Visual />
    </div>
  );
}

export default App;
