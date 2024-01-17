import React from "react";
import "./Navbar.css";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#Homepage">
          <div className="circle">
            <p className="text-a">A</p>
          </div>
        </a>

        <h6 className="nav-logo-text"></h6>
      </div>

      <ul className="nav-links">
        <li>
          <a className="nav-link" href="#Homepage">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="#About">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="#Works">
            Works
          </a>
        </li>
        <li>
          <a className="nav-link" href="#Contact">
            Contact
          </a>
        </li>
      </ul>

      <ul className="navbar-social-links">
        <li>
          <CiLinkedin className="social-icon" />
        </li>

        <li>
          <FaGithub className="social-icon" />
        </li>

        <li className="resume-btn">
          <a href="#" className="button-54">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
