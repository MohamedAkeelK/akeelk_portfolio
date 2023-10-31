import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-ctr">
        <a href="">AkeelWebdev.Tech</a>
      </div>

      <ul className="nav-links-ctr">
        <li className="nav-link">
          <a href="">Home</a>
        </li>
        <li className="nav-link">
          <a href="">About</a>
        </li>
        <li className="nav-link">
          <a href="">My Work</a>
        </li>
        <li className="nav-link">
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}
