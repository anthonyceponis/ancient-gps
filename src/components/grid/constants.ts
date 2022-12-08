export const BLOCK_GRID = "c-grid";

export const GRID_LINES_COLOR = "rgba(119,119,119, 0.25)";
export const GRID_NODE_UNVISITED_COLOR = "#fafafc";
export const GRID_NODE_VISITED_COLOR = "#FF4457";
export const GRID_NODE_SOLUTION_COLOR = "#B3A6D9";
export const GRID_START_NODE_COLOR = "white";
export const GRID_TARGET_NODE_COLOR = "white";
export const GRID_WALL_NODE_COLOR = "#0E1921";

export const BOX_SIZE = 26;
export const BOXES_X = Math.floor(window.innerWidth / BOX_SIZE);
export const BOXES_Y = Math.floor((window.innerHeight - 75) / BOX_SIZE);

// Had to declare again to avoid init error
const getNodeKey = (x: number, y: number): string => {
  return `x${x},y${y}`;
};

export const START_NODE = getNodeKey(5, Math.floor(BOXES_Y / 2));
export const TARGET_NODE = getNodeKey(BOXES_X - 5, Math.floor(BOXES_Y / 2));

export enum NODE_LABELS {
  UNVISISTED,
  VISITED,
  WALL,
}
