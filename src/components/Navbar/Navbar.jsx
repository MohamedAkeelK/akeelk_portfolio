import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-ctr">
        {/* <a href=""> */}
          <div className="nav-akeel-logo"></div>
          {/* <span className="nav-logo-dash">._</span> */}
        {/* </a> */}
      </div>

      <ul className="nav-links-ctr">
        <li className="nav-link">
          <a href="">
            <span className="nav-link-slash">// </span>Home
          </a>
        </li>
        <li className="nav-link">
          <a href="">
            <span className="nav-link-slash">// </span>Expertise
          </a>
        </li>
        <li className="nav-link">
          <a href="">
            <span className="nav-link-slash">// </span>Work
          </a>
        </li>
      </ul>
      <a href="#" className="nav-contact-button">
        Get in Touch
      </a>
    </div>
  );
}
