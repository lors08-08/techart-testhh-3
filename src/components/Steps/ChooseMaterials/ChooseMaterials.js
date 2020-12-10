import React from "react";
import { selectMaterial } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ChooseMaterials.module.css";

function ChooseMaterials() {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.building);
  const materialType = useSelector((state) => state.material)

  return (
    <div className={styles.box}>
      <ul>
        {type === 1 ? (
          <>
            <li
              style={{color:(materialType === 1) && "#655bf5" }}
              onClick={() => {
                dispatch(selectMaterial(1));
              }}
            >
              Кирпич
            </li>
            <li
              style={{color:(materialType === 2) && "#655bf5" }}
              onClick={() => {
                dispatch(selectMaterial(2));
              }}
            >
              Шлакоблок
            </li>
            <li
              style={{color:(materialType === 3) && "#655bf5" }}
              onClick={() => {
                dispatch(selectMaterial(3));
              }}
            >
              Деревянный брус
            </li>
          </>
        ) : (
          <>
            <li
              style={{color:(materialType === 4) && "#655bf5" }}
              onClick={() => {
                dispatch(selectMaterial(4));
              }}
            >
              Металл
            </li>
            <li
              style={{color:(materialType === 5) && "#655bf5" }}
              onClick={() => {
                dispatch(selectMaterial(5));
              }}
            >
              Сендвич-панели
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default ChooseMaterials;
