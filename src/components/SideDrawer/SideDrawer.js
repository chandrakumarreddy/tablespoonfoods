import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

export default function SideDrawer({ open }) {
  const classes = `sideDrawer ${open ? "open" : ""}`;
  return (
    <nav className={classes}>
      <ul>
        <li>
          <Link to="/">Buy</Link>
        </li>
        <li>
          <Link to="/">Locate us</Link>
        </li>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/">Recipes</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
