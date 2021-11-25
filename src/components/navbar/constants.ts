import { IAppStore } from "../app/types";
import { generateGridData } from "../grid/helpers";
import { INavStore } from "./types";

export const BLOCK_NAVBAR = "c-navbar";
export const BLOCK_SIDENAV = "c-sidenav";

export const SET_ALGORITHM = "SET_ALGORITHM";
export const SET_MAZE = "SET_MAZE";
export const SET_SPEED = "SET_SPEED";

export const ALGORITHM_BFS = "ALGORITHM_BFS";
export const ALGORITHM_DFS = "ALGORITHM_DFS";
export const ALGORITHM_DIJIKSTRAS = "ALGORITHM_DIJIKSTRAS";
export const ALGORITHMA_STAR = "ALGORITHMA_STAR";

export const MAZE_RECURSIVE_DIVISION = "MAZE_RECURSIVE_DIVISION";

export const SPEED_FAST = 2;
export const SPEED_MODERATE = 1;
export const SPEED_SLOW = 0.5;

export const initialState: INavStore = {
  algorithm: ALGORITHM_BFS,
  maze: null,
  speed: SPEED_MODERATE,
};
