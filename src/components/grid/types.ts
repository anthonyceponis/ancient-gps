// export interface IBox {
//   x: number;
//   y: number;
// }

import { NODE_LABELS } from "./constants";

export interface IGrid {
  [key: string]: IBox;
}
export interface IBox {
  x: number;
  y: number;
  label: NODE_LABELS;
  nodes: string[];
  parent: string | undefined | null;
}

export interface IAnimateBoxFill {
  start: number | undefined;
  previousTimestamp: number | undefined;
  previousDelta: number;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  color: string;
}
