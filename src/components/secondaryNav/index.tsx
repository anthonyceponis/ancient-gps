import React from "react";
import { BLOCK_SECONDARY_NAV } from "./constants";

import {
  GRID_NODE_UNVISITED_COLOR,
  GRID_NODE_VISITED_COLOR,
  GRID_WALL_NODE_COLOR,
  GRID_NODE_SOLUTION_COLOR,
  GRID_START_NODE_COLOR,
  GRID_TARGET_NODE_COLOR,
} from "../grid/constants";

import Bull from "../../images/bullBlack.svg";
import Theseus from "../../images/theseus.svg";

const SecondaryNav: React.FC = () => {
  return (
    <div className={`${BLOCK_SECONDARY_NAV}`}>
      <div>
        <b>Key:</b>
      </div>
      <div>
        <div style={{ backgroundColor: GRID_NODE_UNVISITED_COLOR }} /> Unvisited
        Node
      </div>
      <div>
        <div style={{ backgroundColor: GRID_NODE_VISITED_COLOR }} /> Visited
        Node
      </div>
      <div>
        <div style={{ backgroundColor: GRID_WALL_NODE_COLOR }} /> Wall Node
      </div>
      <div>
        <div style={{ backgroundColor: GRID_NODE_SOLUTION_COLOR }} />
        Solution Node
      </div>
      <div>
        <div style={{ backgroundColor: GRID_START_NODE_COLOR }}>
          <img src={Bull} alt="Bull icon" />
        </div>
        Start Node (Minotaur)
      </div>
      <div>
        <div style={{ backgroundColor: GRID_TARGET_NODE_COLOR }}>
          <img src={Theseus} alt="Theseus icon" />
        </div>
        Target Node (Theseus)
      </div>
    </div>
  );
};

export default SecondaryNav;
