import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-ctr">
        <a href="">AkeelWebdev.Tech._</a>
      </div>

      <ul className="nav-links-ctr">
        <li className="nav-link">
          <a href="">
            <span className="nav-link-slash">// </span>Home
          </a>
        </li>
        <li className="nav-link">
          <a href="">
            <span className="nav-link-slash">// </span>About
          </a>
        </li>
        <li className="nav-link">
          <a href="">
            <span className="nav-link-slash">// </span>My Work
          </a>
        </li>
        <li className="nav-link">
          <a href="">
            <span className="nav-link-slash">// </span>Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
