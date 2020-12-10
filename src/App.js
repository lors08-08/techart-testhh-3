import React from "react"
import styles from "./App.module.css"
import Steps from "./components/Steps/Steps";
import Controllers from "./components/Controllers/Controllers";

function App() {
  return (
    <div className={styles.box}>
      <Steps />
      <Controllers />
    </div>
  );
}

export default App;
