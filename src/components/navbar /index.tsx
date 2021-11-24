import React, { useState } from "react";
import { BLOCK_NAVBAR } from "./constants";
import { SideNav } from "./helpers";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={BLOCK_NAVBAR}>
      <div>
        <h1>Ancient GPS</h1>
      </div>
      <div className={`${BLOCK_NAVBAR}-hamburger`}>
        <div
          className={`${BLOCK_NAVBAR}-hamburger-${open ? "open" : "closed"}`}
        />
        <span
          className={`${BLOCK_NAVBAR}-hamburger-clicker`}
          onClick={() => {
            setOpen(!open);
          }}
        ></span>
      </div>
      <SideNav open={open} />
    </div>
  );
};

export default Navbar;
