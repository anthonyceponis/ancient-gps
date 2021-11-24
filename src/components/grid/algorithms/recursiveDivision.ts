import { IGrid, IAnimateBoxFill } from "../types";
import {
  BOXES_X,
  BOXES_Y,
  BOX_SIZE,
  GRID_WALL_NODE_COLOR,
  NODE_LABELS,
  START_NODE,
  TARGET_NODE,
} from "../constants";

import { animateBoxFill, delay, getNodeKey } from "../helpers";

export const recursiveDivision = async ({
  grid,
  rowStart,
  rowEnd,
  colStart,
  colEnd,
  split,
  surroundingWalls,
  ctx,
}: {
  grid: IGrid;
  rowStart: number;
  rowEnd: number;
  colStart: number;
  colEnd: number;
  split: string;
  surroundingWalls: boolean;
  ctx: CanvasRenderingContext2D;
}) => {
  if (rowEnd < rowStart || colEnd < colStart) {
    return;
  }
  if (!surroundingWalls) {
    for (let node of Object.keys(grid)) {
      let x = parseInt(node.split(",")[0].split("x")[1]);
      let y = parseInt(node.split(",")[1].split("y")[1]);
      if (x === 0 || y === 0 || x === BOXES_X - 1 || y === BOXES_Y - 1) {
        grid[getNodeKey(x, y)].label = NODE_LABELS.WALL;

        const animateBoxParams: IAnimateBoxFill = {
          start: undefined,
          previousTimestamp: undefined,
          previousDelta: 0,
          ctx,
          x: x * BOX_SIZE + BOX_SIZE / 2,
          y: y * BOX_SIZE + BOX_SIZE / 2,
          color: GRID_WALL_NODE_COLOR,
        };

        await delay(1);
        requestAnimationFrame((timestamp) =>
          animateBoxFill(timestamp, animateBoxParams)
        );
      }
    }
    surroundingWalls = true;
  }
  if (split === "horizontal") {
    let possibleRows = [];
    for (let i = rowStart; i <= rowEnd; i += 2) {
      possibleRows.push(i);
    }
    let possibleCols = [];
    for (let i = colStart - 1; i <= colEnd + 1; i += 2) {
      possibleCols.push(i);
    }
    let randomRowIndex = Math.floor(Math.random() * possibleRows.length);
    let randomColIndex = Math.floor(Math.random() * possibleCols.length);
    let currentRow = possibleRows[randomRowIndex];
    let colRandom = possibleCols[randomColIndex];
    for (let node of Object.keys(grid)) {
      let x = parseInt(node.split(",")[0].split("x")[1]);
      let y = parseInt(node.split(",")[1].split("y")[1]);
      if (
        y === currentRow &&
        x !== colRandom &&
        x >= colStart - 1 &&
        x <= colEnd + 1 &&
        getNodeKey(x, y) !== START_NODE &&
        getNodeKey(x, y) !== TARGET_NODE
      ) {
        grid[getNodeKey(x, y)].label = NODE_LABELS.WALL;

        const animateBoxParams: IAnimateBoxFill = {
          start: undefined,
          previousTimestamp: undefined,
          previousDelta: 0,
          ctx,
          x: x * BOX_SIZE + BOX_SIZE / 2,
          y: y * BOX_SIZE + BOX_SIZE / 2,
          color: GRID_WALL_NODE_COLOR,
        };

        await delay(1);
        requestAnimationFrame((timestamp) =>
          animateBoxFill(timestamp, animateBoxParams)
        );
      }
    }
    if (currentRow - 2 - rowStart > colEnd - colStart) {
      await recursiveDivision({
        grid,
        rowStart,
        rowEnd: currentRow - 2,
        colStart,
        colEnd,
        split,
        surroundingWalls,
        ctx,
      });
    } else {
      await recursiveDivision({
        grid,
        rowStart,
        rowEnd: currentRow - 2,
        colStart,
        colEnd,
        split: "vertical",
        surroundingWalls,
        ctx,
      });
    }
    if (rowEnd - (currentRow + 2) > colEnd - colStart) {
      await recursiveDivision({
        grid,
        rowStart: currentRow + 2,
        rowEnd,
        colStart,
        colEnd,
        split,
        surroundingWalls,
        ctx,
      });
    } else {
      await recursiveDivision({
        grid,
        rowStart: currentRow + 2,
        rowEnd,
        colStart,
        colEnd,
        split: "vertical",
        surroundingWalls,
        ctx,
      });
    }
  } else {
    let possibleCols = [];
    for (let number = colStart; number <= colEnd; number += 2) {
      possibleCols.push(number);
    }
    let possibleRows = [];
    for (let number = rowStart - 1; number <= rowEnd + 1; number += 2) {
      possibleRows.push(number);
    }
    let randomColIndex = Math.floor(Math.random() * possibleCols.length);
    let randomRowIndex = Math.floor(Math.random() * possibleRows.length);
    let currentCol = possibleCols[randomColIndex];
    let rowRandom = possibleRows[randomRowIndex];
    for (let node of Object.keys(grid)) {
      let x = parseInt(node.split(",")[0].split("x")[1]);
      let y = parseInt(node.split(",")[1].split("y")[1]);
      if (
        x === currentCol &&
        y !== rowRandom &&
        y >= rowStart - 1 &&
        y <= rowEnd + 1 &&
        getNodeKey(x, y) !== START_NODE &&
        getNodeKey(x, y) !== TARGET_NODE
      ) {
        grid[getNodeKey(x, y)].label = NODE_LABELS.WALL;
        const animateBoxParams: IAnimateBoxFill = {
          start: undefined,
          previousTimestamp: undefined,
          previousDelta: 0,
          ctx,
          x: x * BOX_SIZE + BOX_SIZE / 2,
          y: y * BOX_SIZE + BOX_SIZE / 2,
          color: GRID_WALL_NODE_COLOR,
        };

        await delay(1);
        requestAnimationFrame((timestamp) =>
          animateBoxFill(timestamp, animateBoxParams)
        );
      }
    }
    if (rowEnd - rowStart > currentCol - 2 - colStart) {
      await recursiveDivision({
        grid,
        rowStart,
        rowEnd,
        colStart,
        colEnd: currentCol - 2,
        split: "horizontal",
        surroundingWalls,
        ctx,
      });
    } else {
      await recursiveDivision({
        grid,
        rowStart,
        rowEnd,
        colStart,
        colEnd: currentCol - 2,
        split,
        surroundingWalls,
        ctx,
      });
    }
    if (rowEnd - rowStart > colEnd - (currentCol + 2)) {
      await recursiveDivision({
        grid,
        rowStart,
        rowEnd,
        colStart: currentCol + 2,
        colEnd,
        split: "horizontal",
        surroundingWalls,
        ctx,
      });
    } else {
      await recursiveDivision({
        grid,
        rowStart,
        rowEnd,
        colStart: currentCol + 2,
        colEnd,
        split,
        surroundingWalls,
        ctx,
      });
    }
  }
};
