import { Dispatch } from "redux";
import { UPDATE_GRID_DATA, CLEAR_GRID_DATA } from "./constants";
import { IGrid } from "../grid/types";
import { generateGridData } from "../grid/helpers";

export const updateGridData = (grid: IGrid) => (dispatch: Dispatch) => {
  dispatch({ type: UPDATE_GRID_DATA, payload: grid });
};

export const clearGridData = () => (dispatch: Dispatch) => {
  const grid: IGrid = generateGridData();
  dispatch({ type: CLEAR_GRID_DATA, payload: grid });
};
