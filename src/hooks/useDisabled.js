import { useSelector } from "react-redux";

export const useDisabled = () => {
  const { step, building, height, material, sizeX, sizeY } = useSelector(
    (state) => state
  );
  let isDisabled = true;

  switch (step) {
    case 1: {
      isDisabled = building === null;
      break;
    }
    case 2: {
      isDisabled = height === "";
      break;
    }
    case 3: {
      isDisabled = material === null;
      break;
    }
    case 4: {
      isDisabled = (sizeX && sizeY) === "";
    }
  }

  return isDisabled;
};
