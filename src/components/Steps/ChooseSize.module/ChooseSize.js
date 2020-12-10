import React from "react";
import styles from "./ChooseSize.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectSizeX, selectSizeY} from "../../../redux/actions";

function ChooseSize() {
  const dispatch = useDispatch()

  const sizeX = useSelector((state)=>state.sizeX)
  const sizeY = useSelector((state)=>state.sizeY)

  const handleSizeX = (e) => {
    dispatch(selectSizeX(e.target.value));
  }
  const handleSizeY = (e) => {
    dispatch(selectSizeY(e.target.value));
  }

  return (
    <div className={styles.box}>
      <input type="numbers" placeholder="введите ширину(м)" value={sizeX} onChange={handleSizeX} />
      <div>X</div>
      <input type="numbers" placeholder="введите высоту(м)" value={sizeY} onChange={handleSizeY} />
    </div>
  );
}

export default ChooseSize;
