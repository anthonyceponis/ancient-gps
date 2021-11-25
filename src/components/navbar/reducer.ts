import { AnyAction } from "redux";
import { initialState, SET_ALGORITHM, SET_MAZE, SET_SPEED } from "./constants";

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
    default:
      return state;
  }
};

export default reducer;
