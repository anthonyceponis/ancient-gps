import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../types";

import {
  BLOCK_GRID,
  BOXES_X,
  BOXES_Y,
  BOX_SIZE,
  START_NODE,
} from "./constants";
import { drawGrid } from "./helpers";
import { IGrid } from "./types";
import { bfs } from "./searchAlgorithms/bfs";
import { dfs } from "./searchAlgorithms/dfs";
import { recursiveDivision } from "./mazeAlgorithms/recursiveDivision";
import {
  ALGORITHM_BFS,
  ALGORITHM_DFS,
  MAZE_RECURSIVE_DIVISION,
} from "../navbar/constants";
import { toggleVisualising } from "../navbar/actions";

const Grid: React.FC = () => {
  const canvasRef = useRef(null);
  const gridData: IGrid = useSelector((store: IStore) => store.App.gridData);

  const algorithm = useSelector(({ Navbar }: IStore) => Navbar.algorithm);
  const maze = useSelector(({ Navbar }: IStore) => Navbar.maze);
  const speed = useSelector(({ Navbar }: IStore) => Navbar.speed);
  const visualising = useSelector(({ Navbar }: IStore) => Navbar.visualising);

  const dispatch = useDispatch();

  useEffect(() => {
    if (canvasRef.current === null) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.width = BOXES_X * BOX_SIZE;
    canvas.height = BOXES_Y * BOX_SIZE;

    const ctx: CanvasRenderingContext2D = canvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;

    drawGrid(ctx, 9999, 9999);

    // recursiveBacktracking(START_NODE, gridData, ctx, new Set<string>());
    // recursiveDivision(START_NODE, gridData, ctx, new Set<string>());

    // canvas.addEventListener("mousemove", (e) => {
    //   listenForCanvasHover(e, ctx, gridData);
    // });

    window.addEventListener("resize", (e) => {
      drawGrid(ctx, 9999, 9999);
    });

    return () => {
      // canvas.removeEventListener("mousemove", (e) => {
      //   listenForCanvasHover(e, ctx, gridData);
      // });
      window.removeEventListener("resize", (e) => {
        drawGrid(ctx, 9999, 9999);
      });
    };
  }, []);

  useEffect(() => {
    if (canvasRef.current === null || !visualising) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.width = BOXES_X * BOX_SIZE;
    canvas.height = BOXES_Y * BOX_SIZE;

    const ctx: CanvasRenderingContext2D = canvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;

    drawGrid(ctx, 9999, 9999);

    switch (algorithm) {
      case ALGORITHM_BFS: {
        bfs(START_NODE, gridData, speed, ctx).then(() =>
          dispatch(toggleVisualising())
        );
        break;
      }
      case ALGORITHM_DFS: {
        dfs(START_NODE, gridData, ctx, speed, new Set<string>()).then(() =>
          dispatch(toggleVisualising())
        );
        break;
      }
      default:
        break;
    }

    switch (maze) {
      case MAZE_RECURSIVE_DIVISION: {
        recursiveDivision({
          grid: gridData,
          rowStart: 2,
          rowEnd: BOXES_Y - 3,
          colStart: 2,
          colEnd: BOXES_X - 3,
          split: "horizontal",
          surroundingWalls: false,
          speed,
          ctx,
        }).then(() => dispatch(toggleVisualising()));
        break;
      }
      default:
        break;
    }
  }, [algorithm, maze, dispatch, gridData, speed, visualising]);

  return <canvas className={`${BLOCK_GRID}`} ref={canvasRef} />;
};

export default Grid;
