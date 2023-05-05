import React from "react";
import styles from "../inputTagModule/InputTag.module.css"

function Password() {
  return (
    <>
      <form>
        <input type="text" placeholder="Password" className={styles.input}/>
        
      </form>
    </>
  );
}

export default Password;