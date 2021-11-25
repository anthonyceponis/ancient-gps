import { Dispatch } from "redux";
import { UPDATE_GRID_DATA } from "./constants";
import { IGrid } from "../grid/types";

export const updateGridData = (grid: IGrid) => (dispatch: Dispatch) => {
  dispatch({ type: UPDATE_GRID_DATA, payload: grid });
};
