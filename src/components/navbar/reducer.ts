import { AnyAction } from "redux";
import {
  initialState,
  SET_ALGORITHM,
  SET_MAZE,
  SET_SPEED,
  TOGGLE_VISUALISING_ALGORITHM,
  TOGGLE_VISUALISING_MAZE,
} from "./constants";

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_ALGORITHM: {
      return { ...state, algorithm: action.payload };
    }
    case SET_MAZE: {
      return { ...state, maze: action.payload };
    }
    case SET_SPEED: {
      return { ...state, speed: action.payload };
    }
    case TOGGLE_VISUALISING_ALGORITHM: {
      return { ...state, visualisingAlgorithm: !state.visualisingAlgorithm };
    }
    case TOGGLE_VISUALISING_MAZE: {
      return { ...state, visualisingMaze: !state.visualisingMaze };
    }
    default:
      return state;
  }
};

export default reducer;
