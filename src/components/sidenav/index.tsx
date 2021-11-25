import React from "react";
import {
  ALGORITHM_BFS,
  ALGORITHM_DFS,
  BLOCK_SIDENAV,
  MAZE_RECURSIVE_DIVISION,
  SPEED_MODERATE,
  SPEED_FAST,
  SPEED_SLOW,
} from "../navbar/constants";
import Bull from "../../images/bullSand.svg";
import {
  setAlgorithm,
  setMaze,
  setSpeed,
  toggleVisualisingAlgorithm,
  toggleVisualisingMaze,
} from "../navbar/actions";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../types";
import { updateGridData } from "../app/actions";
import { generateGridData } from "../grid/helpers";
import SecondaryNav from "../secondaryNav";

export const SideNav: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<boolean>;
}> = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
}) => {
  const algorithm = useSelector(({ Navbar }: IStore) => Navbar.algorithm);
  const maze = useSelector(({ Navbar }: IStore) => Navbar.maze);
  const speed = useSelector(({ Navbar }: IStore) => Navbar.speed);

  const dispatch = useDispatch();

  return (
    <div>
      <div
        className={` ${BLOCK_SIDENAV}-backdrop ${
          open === true
            ? BLOCK_SIDENAV + "-backdrop-open"
            : BLOCK_SIDENAV + "-backdrop-closed"
        }`}
        onClick={() => setOpen(false)}
      />
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
                    className={`${BLOCK_SIDENAV}-hover`}
                    onClick={() => {
                      dispatch(toggleVisualisingAlgorithm());
                      dispatch(setAlgorithm(ALGORITHM_BFS));
                      setOpen(false);
                    }}
                  >
                    Breadth-first search
                  </span>
                </li>
                <li>
                  <span
                    className={`${BLOCK_SIDENAV}-hover`}
                    onClick={() => {
                      dispatch(toggleVisualisingAlgorithm());
                      dispatch(setAlgorithm(ALGORITHM_DFS));
                      setOpen(false);
                    }}
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
                    className={`${BLOCK_SIDENAV}-hover`}
                    onClick={() => {
                      dispatch(setMaze(null));
                      dispatch(updateGridData(generateGridData()));
                    }}
                  >
                    No Maze
                  </span>
                </li>
                <li>
                  <span
                    className={`${BLOCK_SIDENAV}-hover`}
                    onClick={() => {
                      dispatch(toggleVisualisingMaze());
                      dispatch(setAlgorithm(null));
                      dispatch(updateGridData(generateGridData()));
                      dispatch(setMaze(MAZE_RECURSIVE_DIVISION));
                      setOpen(false);
                    }}
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
            <li>
              <span
                className={`${BLOCK_SIDENAV}-hover `}
                onClick={() => {
                  dispatch(updateGridData(generateGridData()));
                }}
              >
                Clear Board
              </span>
            </li>
          </ul>
        </div>
        <SecondaryNav />
      </div>
    </div>
  );
};
