import React from "react";
import "./BackDrop.css";

export default function BackDrop({ handleClick }) {
  return <div className="backDrop" onClick={handleClick} />;
}
