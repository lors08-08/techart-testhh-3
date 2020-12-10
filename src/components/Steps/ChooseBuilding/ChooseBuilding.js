import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectBuilding} from "../../../redux/actions";
import styles from "./ChooseBuildong.module.css"

function ChooseBuilding() {
  const dispatch = useDispatch()
  const type = useSelector((state) => state.building)

  const handleSelect = (type) => {
    dispatch(selectBuilding(type))
  }

  return (
    <div className={styles.box}>
      <ul>
        <li style={{color:(type === 1) && "#655bf5" }} onClick={()=>{handleSelect(1)}}>
          Жилой дом
        </li>
        <li style={{color:(type === 2) && "#655bf5" }} onClick={()=>{handleSelect(2)}}>
          Гараж
        </li>
      </ul>
    </div>
  );
}

export default ChooseBuilding;