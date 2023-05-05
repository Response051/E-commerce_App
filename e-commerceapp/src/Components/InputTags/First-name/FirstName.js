import React from "react";
import styles from "../inputTagModule/InputTag.module.css"

function FirstName() {
  return (
    <>
      <form>
        <input type="text" placeholder="Name" className={styles.input}/>
        
      </form>
    </>
  );
}

export default FirstName;
