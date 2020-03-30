import React from "react";

import "./DrawerToggleButton.css";

export default function DrawerButton({ handleClick }) {
  return (
    <button className="drawerButton" onClick={handleClick}>
      <div className="drawerButton--line" />
      <div className="drawerButton--line" />
      <div className="drawerButton--line" />
    </button>
  );
}
