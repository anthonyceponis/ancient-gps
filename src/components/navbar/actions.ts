import { Dispatch } from "redux";
import { SET_ALGORITHM, SET_MAZE, SET_SPEED } from "./constants";

export const setAlgorithm = (algorithm: string) => (dispatch: Dispatch) => {
  dispatch({ type: SET_ALGORITHM, payload: algorithm });
};

export const setMaze = (maze: string) => (dispatch: Dispatch) => {
  dispatch({ type: SET_MAZE, payload: maze });
};

export const setSpeed = (speed: number) => (dispatch: Dispatch) => {
  dispatch({ type: SET_SPEED, payload: speed });
};
