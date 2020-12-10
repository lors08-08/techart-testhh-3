import React, { useState } from "react";
import styles from "./ChooseHeight.module.css";
import { selectHeight } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function ChooseHeight() {
  const dispatch = useDispatch();

  const textValue = useSelector((state) => state.height);

  const handleInput = (e) => {
    dispatch(selectHeight(e.target.value));
  };

  return (
    <div className={styles.box}>
      <input
        type="numbers"
        placeholder="кол-во этажей"
        value={textValue}
        onChange={handleInput}
      />
    </div>
  );
}

export default ChooseHeight;
