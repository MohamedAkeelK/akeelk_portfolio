import React from "react";
import "./About.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { FaPython } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-page" id="About">
      <div className="top-about-box">
        <div className="left-about-box">
          <div className="personal-photo"></div>
        </div>
        <div className="right-about-box">
          <h1 className="about-me-title">About Me</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, aut.
            Eveniet facere cum aperiam dolor, veritatis sequi. Magni placeat
            rerum nemo, et id, fugiat beatae mollitia architecto recusandae
            perferendis dicta.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            odio repudiandae voluptates! Quos, dolore esse veniam assumenda non
            explicabo voluptas sequi eligendi delectus veritatis adipisci
            maiores. Aperiam quos fugit placeat.
          </p>
        </div>
      </div>
      <div className="bottom-about-box">
        <div className="about-icon">
          <FaHtml5 />
        </div>
        <div className="about-icon">
          <FaCss3Alt />
        </div>
        <div className="about-icon">
          <IoLogoJavascript />
        </div>
        <div className="about-icon">
          <FaReact />
        </div>
        <div className="about-icon">
          <DiNodejs />
        </div>
        <div className="about-icon">
          <DiPostgresql />
        </div>
        <div className="about-icon">
          <FaPython />
        </div>
      </div>
    </div>
  );
}
