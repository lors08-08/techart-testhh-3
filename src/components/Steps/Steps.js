import React from "react";
import styles from "../../App.module.css";
import { useSelector } from "react-redux";
import ChooseBuilding from "./ChooseBuilding/ChooseBuilding";
import ChooseHeight from "./ChooseHeight/ChooseHeight";
import ChooseMaterials from "./ChooseMaterials/ChooseMaterials";
import ChooseSize from "./ChooseSize.module/ChooseSize";
import Result from "../Result/Result";

function Steps() {
  const step = useSelector((state) => state.step);
  const visualStep = useSelector((state) => state.visualStep);

  const message = useSelector((state) => state.message)
  const result = useSelector((state) => state.result)

  function StepCount() {
    if (result === null) {
      return "Шаг "+{visualStep}
    }
    if(result === "error")
      return "Ошибка"
    if(result === "ok") {
      return "Успешно"
    }
  }

  const obj = {
    1: {
      component: ChooseBuilding,
      title: "Что будем строить?",
    },
    2: {
      component: ChooseHeight,
      title: "Количество этажей(число):"
    },
    3: {
      component: ChooseMaterials,
      title: "Материал стен:"
    },
    4: {
      component: ChooseSize,
      title: "Длина стен (в метрах):"
    },


  };

  const CurrentComponent = obj[step].component;

  console.log(message)
  console.log(result)


  return (
    <>
      {(result === null) ? (
        <>
          <div className={styles.title}>Калькулятор цены конструкций</div>
          <div className={styles.stepCount}>Шаг {visualStep}</div>
          <div className={styles.selector}>
            <div className={styles.selectorTitle}>{obj[step].title}</div>
            <div className={styles.options}>
              <CurrentComponent />
            </div>
          </div>
        </>
      ) : <Result /> }
    </>
  );
}

export default Steps;
