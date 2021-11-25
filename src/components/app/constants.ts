import { IAppStore } from "./types";
import { generateGridData } from "..//grid/helpers";

export const UPDATE_GRID_DATA = "UPDATE_GRID_DATA";
export const CLEAR_GRID_DATA = "CLEAR_GRID_DATA";

export const initialState: IAppStore = {
  gridData: generateGridData(),
};
