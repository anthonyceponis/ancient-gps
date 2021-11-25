import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../types";
import { BLOCK_NAVBAR } from "./constants";
import { SideNav } from "./helpers";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const visualising = useSelector(({ Navbar }: IStore) => Navbar.visualising);

  return (
    <div className={BLOCK_NAVBAR}>
      <div>
        <h1>Ancient GPS</h1>
      </div>
      <div className={`${BLOCK_NAVBAR}-hamburger`}>
        <div
          className={`${BLOCK_NAVBAR}-hamburger-${
            open ? "open" : "closed"
          } ${BLOCK_NAVBAR}-hamburger-${visualising ? "visualising" : ""}`}
        />
        <span
          className={`${BLOCK_NAVBAR}-hamburger-clicker`}
          style={{ cursor: visualising ? "not-allowed" : "pointer" }}
          onClick={() => {
            if (!open && !visualising) setOpen(true);
            else if (open) setOpen(false);
          }}
        ></span>
      </div>
      <SideNav open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
