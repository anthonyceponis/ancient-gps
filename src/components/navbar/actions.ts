import { Dispatch } from "redux";
import {
  SET_ALGORITHM,
  SET_MAZE,
  SET_SPEED,
  TOGGLE_VISUALISING,
} from "./constants";

export const setAlgorithm =
  (algorithm: string | null) => (dispatch: Dispatch) => {
    localStorage.setItem("algorithm", algorithm === null ? "" : algorithm);
    dispatch({ type: SET_ALGORITHM, payload: algorithm });
  };

export const setMaze = (maze: string | null) => (dispatch: Dispatch) => {
  localStorage.setItem("maze", maze === null ? "" : maze);
  dispatch({ type: SET_MAZE, payload: maze });
};

export const setSpeed = (speed: number) => (dispatch: Dispatch) => {
  localStorage.setItem("speed", speed.toString());
  dispatch({ type: SET_SPEED, payload: speed });
};

export const toggleVisualising = () => (dispatch: Dispatch) => {
  dispatch({ type: TOGGLE_VISUALISING, payload: null });
};
