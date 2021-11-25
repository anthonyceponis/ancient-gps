// import React from "react";
import { IGrid, IBox, IAnimateBoxFill } from "./types";
import {
  GRID_NODE_UNVISITED_COLOR,
  GRID_LINES_COLOR,
  BOXES_X,
  BOXES_Y,
  BOX_SIZE,
  GRID_NODE_SOLUTION_COLOR,
  NODE_LABELS,
  TARGET_NODE,
  START_NODE,
  GRID_START_NODE_COLOR,
  GRID_TARGET_NODE_COLOR,
} from "./constants";

import Bull from "../../images/bullBlack.svg";
import Theseus from "../../images/theseus.svg";

export const drawGrid = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  // populates the grid with squares
  for (let y = 0; y < BOXES_Y; y++) {
    for (let x = 0; x < BOXES_X; x++) {
      // add a single rect to path:
      ctx.beginPath();
      ctx.rect(x * BOX_SIZE, y * BOX_SIZE, BOX_SIZE, BOX_SIZE);

      if (getNodeKey(x, y) === START_NODE) {
        ctx.fillStyle = GRID_START_NODE_COLOR;
        ctx.fill();
        const base_image = new Image();
        base_image.src = Bull;
        base_image.onload = function () {
          ctx.drawImage(
            base_image,
            x * BOX_SIZE,
            y * BOX_SIZE,
            BOX_SIZE,
            BOX_SIZE
          );
        };
      } else if (getNodeKey(x, y) === TARGET_NODE) {
        ctx.fillStyle = GRID_TARGET_NODE_COLOR;
        ctx.fill();
        const base_image = new Image();
        base_image.src = Theseus;
        base_image.onload = function () {
          ctx.drawImage(
            base_image,
            x * BOX_SIZE,
            y * BOX_SIZE,
            BOX_SIZE,
            BOX_SIZE
          );
        };
      } else {
        ctx.fillStyle = GRID_NODE_UNVISITED_COLOR;
        ctx.fill();
      }
    }
  }

  // draws the verticle lines
  for (let x = 0; x <= BOXES_X; x++) {
    ctx.beginPath();
    ctx.moveTo(BOX_SIZE * x, 0);
    ctx.lineTo(BOX_SIZE * x, BOXES_Y * BOX_SIZE);
    ctx.closePath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = GRID_LINES_COLOR;
    ctx.stroke();
  }

  // draws the horizontal lines
  for (let y = 0; y <= BOXES_Y; y++) {
    ctx.beginPath();
    ctx.moveTo(0, BOX_SIZE * y);
    ctx.lineTo(BOXES_X * BOX_SIZE, BOX_SIZE * y);
    ctx.closePath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = GRID_LINES_COLOR;
    ctx.stroke();
  }
};

export const generateGridData = (): IGrid => {
  const grid: IGrid = {};

  for (let y = 0; y < BOXES_Y; y++) {
    for (let x = 0; x < BOXES_X; x++) {
      const key = getNodeKey(x, y);
      const label = NODE_LABELS.UNVISISTED;
      const nodes = getConnectedNodes(x, y);
      const box: IBox = {
        x,
        y,
        label,
        nodes,
        parent: undefined,
      };
      grid[key] = box;
    }
  }

  return grid;
};

const getConnectedNodes = (x: number, y: number): string[] => {
  const nodes: string[] = [];

  // Checks if the node is on the left edge or the right edge or the middle of the grid, where middle is an x such that it is not on the left or right edge
  if (x === 0) nodes.push(getNodeKey(x + 1, y));
  else if ((x + 1) % BOXES_X === 0) nodes.push(getNodeKey(x - 1, y));
  else {
    nodes.push(getNodeKey(x + 1, y));
    nodes.push(getNodeKey(x - 1, y));
  }

  // Checks if the node is on the top edge or the bottom edge or the middle of the grid, where middle is a y such that it is not on the top or bottom edge
  if (y === 0) nodes.push(getNodeKey(x, y + 1));
  else if (y === BOXES_Y - 1) nodes.push(getNodeKey(x, y - 1));
  else {
    nodes.push(getNodeKey(x, y + 1));
    nodes.push(getNodeKey(x, y - 1));
  }

  return nodes;
};

export const getNodeKey = (x: number, y: number): string => {
  return `x${x},y${y}`;
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const animateBoxFill = (
  speed: number,
  timestamp: number,
  { start, previousTimestamp, previousDelta, ctx, x, y, color }: IAnimateBoxFill
) => {
  if (start === undefined) start = timestamp;
  const elapsed = timestamp - start;
  let delta = 0;

  if (previousTimestamp !== timestamp) {
    // extra computation here to make sure the boxes enlarge from the center
    // reduce box size by 2 so we could see the grid lines
    delta = Math.min(0.05 * elapsed, BOX_SIZE - 2);
    ctx.fillStyle = color;
    ctx.clearRect(
      x - previousDelta / 2,
      y - previousDelta / 2,
      previousDelta,
      previousDelta
    );
    ctx.fillRect(x - delta / 2, y - delta / 2, delta, delta);
  }

  if (elapsed < speed * 1000) {
    previousTimestamp = timestamp;
    const animateBoxParams: IAnimateBoxFill = {
      start,
      previousTimestamp,
      previousDelta: delta,
      ctx,
      x,
      y,
      color,
    };
    requestAnimationFrame((timestamp) =>
      animateBoxFill(speed, timestamp, animateBoxParams)
    );
  }
};

export const backtrace = async (
  currentNode: string | null,
  grid: IGrid,
  speed: number,
  ctx: CanvasRenderingContext2D
) => {
  const backTrackNodeArray = [];
  while (currentNode) {
    backTrackNodeArray.push(currentNode);
    currentNode = grid[currentNode].parent as string | null;
  }
  for (let i = backTrackNodeArray.length - 1; i >= 0; --i) {
    await delay(speed);
    const x = grid[backTrackNodeArray[i]].x;
    const y = grid[backTrackNodeArray[i]].y;

    if (getNodeKey(x, y) !== START_NODE && getNodeKey(x, y) !== TARGET_NODE) {
      const animateBoxParams: IAnimateBoxFill = {
        start: undefined,
        previousTimestamp: undefined,
        previousDelta: 0,
        ctx,
        x: x * BOX_SIZE + BOX_SIZE / 2,
        y: y * BOX_SIZE + BOX_SIZE / 2,
        color: GRID_NODE_SOLUTION_COLOR,
      };

      requestAnimationFrame((timestamp) =>
        animateBoxFill(speed, timestamp, animateBoxParams)
      );
    }
  }
};

export function shuffle(array: string[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

// export const listenForCanvasHover = (
//   e: MouseEvent,
//   ctx: CanvasRenderingContext2D,
//   grid: IGrid
// ) => {
//   let rect = (
//       document.querySelector("body") as HTMLBodyElement
//     ).getBoundingClientRect(),
//     rectX = e.clientX - rect.left,
//     rectY =
//       e.clientY -
//       rect.top -
//       parseInt(
//         window
//           .getComputedStyle(
//             document.querySelector(".c-navbar") as HTMLDivElement
//           )
//           .height.split("px")[0]
//       );

//   drawGrid(ctx, grid, rectX, rectY);
// };
