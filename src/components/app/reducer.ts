import { AnyAction } from "redux";
import {
  initialState,
  CLEAR_GRID_DATA,
  UPDATE_GRID_DATA,
  SET_ALGORITHM,
  SET_SPEED,
} from "./constants";

export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_GRID_DATA: {
      return { ...state, gridData: action.payload };
    }
    case CLEAR_GRID_DATA: {
      return { ...state, gridData: action.payload };
    }
    case SET_ALGORITHM: {
      return { ...state, algorithm: action.payload };
    }
    case SET_SPEED: {
      return { ...state, speed: action.payload };
    }
    default:
      return { ...state };
  }
};

export default reducer;
