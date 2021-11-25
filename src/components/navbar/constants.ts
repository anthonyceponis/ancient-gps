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

export const SPEED_FAST = 1;
export const SPEED_MODERATE = 10;
export const SPEED_SLOW = 30;

export const TOGGLE_VISUALISING = "TOGGLE_VISUALISING";

let algorithm = localStorage.getItem("algorithm");
if (algorithm === "") algorithm = null;
let maze = localStorage.getItem("maze");
if (maze === "") maze = null;
let speed: string | null = localStorage.getItem("speed");
if (speed === null) speed = SPEED_MODERATE.toString();

export const initialState: INavStore = {
  algorithm: algorithm,
  maze: maze,
  speed: parseInt(speed),
  visualising: false,
};
