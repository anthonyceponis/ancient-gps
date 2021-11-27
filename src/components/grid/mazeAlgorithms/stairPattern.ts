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

export const stairPattern = async ({
  grid,
  speed,
  ctx,
}: {
  grid: IGrid;
  speed: number;
  ctx: CanvasRenderingContext2D;
}) => {
  let height = BOXES_Y - 2;
  let stairUp = true;
  for (let i = 1; i < BOXES_X - 1; i++) {
    if (height < 1) {
      stairUp = !stairUp;
      height += 1;
    } else if (height > BOXES_Y - 2) {
      stairUp = !stairUp;
      height -= 1;
    }
    let x = i;
    let y = height;
    console.log(x, y, getNodeKey(x, y));
    if (getNodeKey(x, y) !== START_NODE && getNodeKey(x, y) !== TARGET_NODE) {
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

      await delay(speed);
      requestAnimationFrame((timestamp) =>
        animateBoxFill(speed, timestamp, animateBoxParams)
      );
    }

    if (stairUp) height--;
    else height++;
  }
};

export default stairPattern;
