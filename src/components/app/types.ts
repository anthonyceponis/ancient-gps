import { IGrid } from "../grid/types";

export interface IAppStore {
  gridData: IGrid;
  algorithm: string;
  speed: number;
}
