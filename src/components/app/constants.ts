import { IAppStore } from "./types";
import { generateGridData } from "..//grid/helpers";

export const UPDATE_GRID_DATA = "UPDATE_GRID_DATA";
export const CLEAR_GRID_DATA = "CLEAR_GRID_DATA";
export const SET_ALGORITHM = "SET_ALGORITHM";
export const SET_SPEED = "SET_SPEED";

export const ALGORITHM_DIJIKSTRAS = "ALGORITHM_DIJIKSTRAS";
export const ALGORITHMA_STAR = "ALGORITHMA_STAR";
export const ALGORITHM_BFS = "ALGORITHM_BFS";
export const ALGORITHM_DFS = "ALGORITHM_DFS";

export const SPEED_FAST = 2;
export const SPEED_AVERAGE = 1;
export const SPEED_SLOW = 0.5;

export const initialState: IAppStore = {
  gridData: generateGridData(),
  algorithm: ALGORITHM_DIJIKSTRAS,
  speed: SPEED_AVERAGE,
};
