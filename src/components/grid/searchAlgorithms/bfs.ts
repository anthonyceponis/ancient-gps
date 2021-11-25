import { IGrid, IAnimateBoxFill } from "../types";
import {
  BOX_SIZE,
  GRID_NODE_VISITED_COLOR,
  NODE_LABELS,
  START_NODE,
  TARGET_NODE,
} from "../constants";

import { animateBoxFill, delay, backtrace } from "../helpers";

export const bfs = async (
  start: string,
  grid: IGrid,
  ctx: CanvasRenderingContext2D
) => {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    // delay to make the animation more visually pleasing
    await delay(10);
    const front = queue[0];
    const x = grid[front].x;
    const y = grid[front].y;

    if (front !== START_NODE && front !== TARGET_NODE) {
      const animateBoxParams: IAnimateBoxFill = {
        start: undefined,
        previousTimestamp: undefined,
        previousDelta: 0,
        ctx,
        x: x * BOX_SIZE + BOX_SIZE / 2,
        y: y * BOX_SIZE + BOX_SIZE / 2,
        color: GRID_NODE_VISITED_COLOR,
      };

      requestAnimationFrame((timestamp) =>
        animateBoxFill(timestamp, animateBoxParams)
      );
    }

    if (front === TARGET_NODE) {
      grid[START_NODE].parent = null;
      return backtrace(front, grid, ctx);
    }

    for (const node of grid[front].nodes)
      if (!visited.has(node) && grid[node].label !== NODE_LABELS.WALL) {
        queue.push(node);
        visited.add(node);
        // add the parent so we could then backtrace to visualise the shortest path
        grid[node].parent = front;
      }

    queue.shift();
  }
  console.log("does not exist m8!");
};
