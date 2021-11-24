import React from "react";
import { BLOCK_SIDENAV } from "./constants";
import Bull from "../../images/bullSand.svg";

export const SideNav: React.FC<{ open: boolean }> = ({
  open,
}: {
  open: boolean;
}) => {
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
                <span className={`${BLOCK_SIDENAV}-hover`}>
                  Breadth-first search
                </span>
              </li>
              <li>
                <span className={`${BLOCK_SIDENAV}-hover`}>
                  Depth-first search
                </span>
              </li>
            </ul>
          </li>
          <li>
            <b>Maze Generators</b>
            <ul>
              <li>
                <span className={`${BLOCK_SIDENAV}-hover`}>
                  Recursive Division
                </span>
              </li>
            </ul>
          </li>
          <li>
            <b>Speed</b>
            <ul>
              <li>
                <span className={`${BLOCK_SIDENAV}-hover`}>Fast</span>
              </li>
              <li>
                <span className={`${BLOCK_SIDENAV}-hover`}>Moderate</span>
              </li>
              <li>
                <span className={`${BLOCK_SIDENAV}-hover`}>Slow</span>
              </li>
            </ul>
          </li>
          <li>
            <span className={`${BLOCK_SIDENAV}-hover`}>Clear Board</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
