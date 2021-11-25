import { AnyAction } from "redux";
import { CLEAR_GRID_DATA, initialState, UPDATE_GRID_DATA } from "./constants";

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_GRID_DATA: {
      return { ...state, gridData: action.payload };
    }
    case CLEAR_GRID_DATA: {
      return { ...state, gridData: action.payload };
    }
    default:
      return { ...state };
  }
};

export default reducer;
