import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Button/button";
import Email from "../InputTags/Email/Email";
import FirstName from "../InputTags/First-name/FirstName";
import Password from "../InputTags/Password/Password";
import { FaFacebook, FaArrowRight, FaGoogle } from "react-icons/fa";
import HeaderPage from "./HeaderPage/HeaderPage";

function SignUpPage() {
  return (
    <>
      <HeaderPage props="SignUp" />
      <FirstName />
      <Email />
      <Password />
      <p className="link1">
        {" "}
        Already have an account?{" "}
        <Link to="/Login">
          <FaArrowRight className="icon icon1" />
        </Link>
      </p>
      <Button props="Sign-Up" />
      <br />
      <p className="link2">Or sign Up with our Social media Accounts</p>
      <FaGoogle className="icon icon2" /> <FaFacebook className="icon icon3" />
      <Outlet />
    </>
  );
}

export default SignUpPage;
