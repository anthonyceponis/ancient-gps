export interface NavbarProps {
  children?: any;
}

export interface INavStore {
  algorithm: string | null;
  maze: string | null;
  speed: number;
  visualisingAlgorithm: boolean;
  visualisingMaze: boolean;
}
