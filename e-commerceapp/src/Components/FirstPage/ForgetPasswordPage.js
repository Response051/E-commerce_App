import React from "react";
import Button from "../Button/button";
import Email from "../InputTags/Email/Email";
import Password from "../InputTags/Password/Password";
import HeaderPage from "./HeaderPage/HeaderPage";

export default function ForgetPasswordPage() {
  return (
    <div className="Appjs-PrimaryStructure">
      <HeaderPage props="Forgort Password!" />
      <Email />
      <Password />
      <Button props="Send" />
    </div>
  );
}
