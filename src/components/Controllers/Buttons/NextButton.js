import React from 'react';
import styles from "../Controllers.module.css";
import {nextStep, resetSteps} from "../../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useDisabled} from "../../../hooks/useDisabled";

function NextButton({isDisabled}) {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextStep())
  }

  const handleCancel = () => {
    dispatch(resetSteps())
  }


  return (
    <>
      <button onClick={handleCancel} className={styles.cancel}>Отмена</button>
      <button
        className={styles.next}
        onClick={handleNext}
        disabled={isDisabled}
      >
        Далее
      </button>
    </>
  );
}

export default NextButton;