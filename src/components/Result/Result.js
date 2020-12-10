import React from "react";
import { useSelector } from "react-redux";
import styles from "./Result.module.css";

function Result() {
  const message = useSelector((state) => state.message);
  const result = useSelector((state) => state.result);

  return (
    <>
      <div className={styles.title}>Калькулятор цены конструкций</div>
      <div className={styles.stepCount}>Результат расчета</div>
      <div className={styles.selector}>
        <div className={styles.selectorTitle}>
          {result === "error" ? "Ошибка" : "Успешно"}
        </div>
        <div className={styles.message}>
          {result === "error" ? (
            <div className={styles.error}>{message}</div>
          ) : (
            <div className={styles.success}>{message}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Result;
