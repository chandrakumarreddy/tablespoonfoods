import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";
import "./ToolBar.css";

export default function ToolBar({ handleClick }) {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__navigation--button">
          <DrawerToggleButton handleClick={handleClick} />
        </div>
        <div className="toolbar__logo">
          <Link to="/">
            <img
              src="http://www.tablespoonfoods.com/images/Logo.png"
              alt="logo"
              width="100%"
              height="100%"
            />
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar__navigation--items">
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
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
