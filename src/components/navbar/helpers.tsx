import React from "react";
import {
  ALGORITHM_BFS,
  ALGORITHM_DFS,
  BLOCK_SIDENAV,
  MAZE_RECURSIVE_DIVISION,
  SPEED_MODERATE,
  SPEED_FAST,
  SPEED_SLOW,
} from "./constants";
import Bull from "../../images/bullSand.svg";
import { setAlgorithm, setMaze, setSpeed } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../types";

export const SideNav: React.FC<{ open: boolean }> = ({
  open,
}: {
  open: boolean;
}) => {
  const algorithm = useSelector(({ Navbar }: IStore) => Navbar.algorithm);
  const maze = useSelector(({ Navbar }: IStore) => Navbar.maze);
  const speed = useSelector(({ Navbar }: IStore) => Navbar.speed);

  const dispatch = useDispatch();

  return (
    <div
      className={`${BLOCK_SIDENAV} ${
        open === true ? BLOCK_SIDENAV + "-open" : BLOCK_SIDENAV + "-closed"
      }`}
    >
      <div>
        <img src={Bull} alt="Bull Logo" />
        <ul>
          <li>
            <b>Searching Algorithms</b>
            <ul>
              <li>
                <span
                  className={`${BLOCK_SIDENAV}-hover ${
                    algorithm === ALGORITHM_BFS ? BLOCK_SIDENAV + "-active" : ""
                  }`}
                  onClick={() => dispatch(setAlgorithm(ALGORITHM_BFS))}
                >
                  Breadth-first search
                </span>
              </li>
              <li>
                <span
                  className={`${BLOCK_SIDENAV}-hover  ${
                    algorithm === ALGORITHM_DFS ? BLOCK_SIDENAV + "-active" : ""
                  }`}
                  onClick={() => dispatch(setAlgorithm(ALGORITHM_DFS))}
                >
                  Depth-first search
                </span>
              </li>
            </ul>
          </li>
          <li>
            <b>Maze Generators</b>
            <ul>
              <li>
                <span
                  className={`${BLOCK_SIDENAV}-hover ${
                    maze === MAZE_RECURSIVE_DIVISION
                      ? BLOCK_SIDENAV + "-active"
                      : ""
                  }`}
                  onClick={() => dispatch(setMaze(MAZE_RECURSIVE_DIVISION))}
                >
                  Recursive Division
                </span>
              </li>
            </ul>
          </li>
          <li>
            <b>Speed</b>
            <ul>
              <li>
                <span
                  className={`${BLOCK_SIDENAV}-hover ${
                    speed === SPEED_FAST ? BLOCK_SIDENAV + "-active" : ""
                  }`}
                  onClick={() => dispatch(setSpeed(SPEED_FAST))}
                >
                  Fast
                </span>
              </li>
              <li>
                <span
                  className={`${BLOCK_SIDENAV}-hover ${
                    speed === SPEED_MODERATE ? BLOCK_SIDENAV + "-active" : ""
                  }`}
                  onClick={() => dispatch(setSpeed(SPEED_MODERATE))}
                >
                  Moderate
                </span>
              </li>
              <li>
                <span
                  className={`${BLOCK_SIDENAV}-hover ${
                    speed === SPEED_SLOW ? BLOCK_SIDENAV + "-active" : ""
                  }`}
                  onClick={() => dispatch(setSpeed(SPEED_SLOW))}
                >
                  Slow
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
