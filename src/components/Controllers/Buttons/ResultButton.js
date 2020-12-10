import React from 'react';
import styles from "../Controllers.module.css";
import {getResult, resetSteps} from "../../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

function ResultButton({isDisabled}) {
  const dispatch = useDispatch();
  const building = parseInt(useSelector((state)=>state.building))
  const height = parseInt(useSelector((state)=>state.height))
  const material = parseInt(useSelector((state)=>state.material))
  const sizeX = parseInt(useSelector((state)=>state.sizeX))
  const sizeY = parseInt(useSelector((state)=>state.sizeY))
  const result = useSelector((state) => state.result);

  const handleResult = () => {
    dispatch(getResult(building, height, material, sizeX, sizeY))
  }
  const handleReset = () => {
    dispatch(resetSteps())
  }
  return (
    <>
      {(result === null) ? (
        <>
          <button
            className={styles.next}
            onClick={handleResult}
            disabled={isDisabled}
          >
            Рассчитать
          </button>
        </>
      ) : (
        <>
          <button
            className={styles.newCalc}
            onClick={handleReset}
          >
            Новый рассчет
          </button>
        </>
      )}
    </>
  );
}

export default ResultButton;