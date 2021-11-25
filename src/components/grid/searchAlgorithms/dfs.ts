import { IGrid, IAnimateBoxFill } from "../types";
import {
  BOX_SIZE,
  GRID_NODE_VISITED_COLOR,
  START_NODE,
  TARGET_NODE,
  NODE_LABELS,
} from "../constants";

import { animateBoxFill, delay, backtrace } from "../helpers";

export const dfs = async (
  currentNode: string,
  grid: IGrid,
  ctx: CanvasRenderingContext2D,
  speed: number,
  visited: Set<string>
): Promise<boolean> => {
  if (currentNode === TARGET_NODE) {
    grid[START_NODE].parent = null;
    await backtrace(currentNode, grid, speed, ctx);
    return true;
  } else if (
    grid[currentNode].nodes.length === 0 ||
    grid[currentNode].label === NODE_LABELS.WALL
  )
    return false;

  visited.add(currentNode);

  const x = grid[currentNode].x;
  const y = grid[currentNode].y;

  if (currentNode !== START_NODE && currentNode !== TARGET_NODE) {
    const animateBoxParams: IAnimateBoxFill = {
      start: undefined,
      previousTimestamp: undefined,
      previousDelta: 0,
      ctx,
      x: x * BOX_SIZE + BOX_SIZE / 2,
      y: y * BOX_SIZE + BOX_SIZE / 2,
      color: GRID_NODE_VISITED_COLOR,
    };

    await delay(speed);
    requestAnimationFrame((timestamp) =>
      animateBoxFill(speed, timestamp, animateBoxParams)
    );
  }

  for (let node of grid[currentNode].nodes.reverse()) {
    if (!visited.has(node) && grid[node].label !== NODE_LABELS.WALL) {
      grid[node].parent = currentNode;
      const found = await dfs(node, grid, ctx, speed, visited);
      if (found) return true;
    }
  }
  return false;
};
