import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../types";
import { BLOCK_NAVBAR } from "./constants";
import { SideNav } from "../sidenav/index";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const visualisingAlgorithm = useSelector(
    ({ Navbar }: IStore) => Navbar.visualisingAlgorithm
  );
  const visualisingMaze = useSelector(
    ({ Navbar }: IStore) => Navbar.visualisingMaze
  );

  return (
    <div className={BLOCK_NAVBAR}>
      <div>
        <h1>Ancient GPS</h1>
      </div>
      <div className={`${BLOCK_NAVBAR}-hamburger`}>
        <div
          className={`${BLOCK_NAVBAR}-hamburger-${
            open ? "open" : "closed"
          } ${BLOCK_NAVBAR}-hamburger-${
            visualisingAlgorithm || visualisingMaze ? "visualising" : ""
          }`}
        />
        <span
          className={`${BLOCK_NAVBAR}-hamburger-clicker`}
          style={{
            pointerEvents:
              visualisingAlgorithm || visualisingMaze ? "none" : "auto",
          }}
          onClick={() => {
            if ((!open && !visualisingAlgorithm) || visualisingMaze)
              setOpen(true);
            else if (open) setOpen(false);
          }}
        ></span>
      </div>
      <SideNav open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
