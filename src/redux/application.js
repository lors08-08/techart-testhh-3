const initialState = {
  building: null,
  height: "",
  material: "",
  sizeX: "",
  sizeY: "",

  step: 1,
  visualStep: 1,

  loading: false,
  result: null,
  message:null
};

function application(state = initialState, action) {
  switch (action.type) {
    case "steps/next":
      const nextStep = (state.step === 1 && state.building === 2) ? 3 : state.step + 1
      return {
        ...state,
        step: nextStep,
        visualStep: state.visualStep + 1
      }
    case "steps/reset":
      return {
        ...state,
        building: null,
        height: "",
        material: "",
        sizeX: "",
        sizeY: "",

        step: 1,
        visualStep: 1,

        loading: false,
        result: null,
        message:null
      };

    case "selectionBuilding/type":
      return {
        ...state,
        building: action.payload
      }
    case "selection/height":
      return {
        ...state,
        height: action.payload
      }
    case "selection/material":
      return {
        ...state,
        material: action.payload
      }
    case "selection/sizeX":
      return {
        ...state,
        sizeX: action.payload
      }
    case "selection/sizeY":
      return {
        ...state,
        sizeY: action.payload
      }
    case "result/start":
      return {
        ...state,
        loading: true
      }
    case "result/succeed":
      return {
        ...state,
        result: action.payload.result,
        message: action.payload.message,
      }
    default:
      return state;
  }
}

export default application;
