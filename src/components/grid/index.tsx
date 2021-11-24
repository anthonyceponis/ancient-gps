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
import { bfs } from "./algorithms/bfs";
import { dfs } from "./algorithms/dfs";
import { recursiveDivision } from "./algorithms/recursiveDivision";

const Grid: React.FC = () => {
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const gridData: IGrid = useSelector((store: IStore) => store.App.gridData);

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
    recursiveDivision({
      grid: gridData,
      rowStart: 2,
      rowEnd: BOXES_Y - 3,
      colStart: 2,
      colEnd: BOXES_X - 3,
      split: "horizontal",
      surroundingWalls: false,
      ctx,
    }).then(() => {
      // dfs(START_NODE, gridData, ctx, new Set<string>());
      bfs(START_NODE, gridData, ctx);
    });

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
  }, [canvasRef, dispatch, gridData]);

  return <canvas className={`${BLOCK_GRID}`} ref={canvasRef} />;
};

export default Grid;
