export function getResult(building, height, material, sizeX, sizeY) {
  return (dispatch) => {
    dispatch({ type: "result/start" });
    fetch(
      `https://data.techart.ru/lab/json/?building=${building}&height=${height}&material=${material}&sizex=${sizeX}&sizey=${sizeY}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "result/succeed",
          payload: json,
        });
      });
  };
}

export function nextStep(step) {
  return {
    type: "steps/next",
    payload: step,
  };
}

export function resetSteps() {
  return {
    type: "steps/reset",
  };
}

//todo
export function selectBuilding(type) {
  return {
    type: "selectionBuilding/type",
    payload: type,
  };
}

export function selectHeight(floors) {
  return {
    type: "selection/height",
    payload: floors,
  };
}

export function selectMaterial(material) {
  return {
    type: "selection/material",
    payload: material,
  };
}

export function selectSizeX(sizeX) {
  return {
    type: "selection/sizeX",
    payload: sizeX,
  };
}

export function selectSizeY(sizeY) {
  return {
    type: "selection/sizeY",
    payload: sizeY,
  };
}
