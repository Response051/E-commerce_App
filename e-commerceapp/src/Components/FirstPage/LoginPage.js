import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaFacebook, FaArrowRight, FaGoogle } from "react-icons/fa";
import Button from "../Button/button";
import FirstName from "../InputTags/First-name/FirstName";
import Password from "../InputTags/Password/Password";
import HeaderPage from "./HeaderPage/HeaderPage";

function LoginPage() {
  return (
    <>
      <HeaderPage props="Login" />
      <FirstName />
      <Password />
      <p className="link1">
        {" "}
        forgot You Password? <Link to="/ForgetPasswordPage">
          <FaArrowRight className="icon icon1" />
        </Link>
      </p>
      <Button props="Login" />
      <br />
      <p className="link2">Or Login with our Social media Accounts</p>
      <FaGoogle className="icon icon2" /> <FaFacebook className="icon icon3" />
      <Outlet />
    </>
  );
}

export default LoginPage;