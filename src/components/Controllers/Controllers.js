import React from "react";
import styles from "./Controllers.module.css";
import { useDispatch, useSelector } from "react-redux";
import {resetSteps, nextStep} from "../../redux/actions";
import {useDisabled} from "../../hooks/useDisabled";
import NextButton from "./Buttons/NextButton";
import ResultButton from "./Buttons/ResultButton";

function Controllers() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.step);

  const isDisabled = useDisabled();

  const handleCancel = () => {
      dispatch(resetSteps())
  }


  return (
    <div className={styles.buttons}>
      {step === 4 ? <ResultButton /> : <NextButton isDisabled={isDisabled} />}
    </div>
  );
}

export default Controllers;
// return (
//   <div className={styles.buttons}>
//     <button onClick={handleCancel} className={styles.cancel}>Отмена</button>
//     {(result === null) ? (
//       (result === 4) ? <ResultButton isDisabled={isDisabled} /> : <NextButton isDisabled={isDisabled} />
//     ) : (
//       <button>Новый расчет</button>
//     )}
//   </div>
// );
// }
