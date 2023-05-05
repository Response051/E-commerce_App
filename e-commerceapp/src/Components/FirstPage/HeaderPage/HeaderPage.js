import React from "react";
import Styles from "./HeaderPage.module.css";
/**
 *  This file gets the individual page to have its own Paragraph 
 * like LOGIN,SIGNUP AND PASSWORD.
 *
 */

function HeaderPage({ props }) {
  return (
    <>
      <p className={Styles.p}>{props}</p>
    </>
  );
}

export default HeaderPage;
