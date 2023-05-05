import React from "react";
import styles from "../inputTagModule/InputTag.module.css"

function Email() {
  return (
    <>
      <form>
        <input type="text" placeholder="Email" className={styles.input}/>
        
      </form>
    </>
  );
}

export default Email;