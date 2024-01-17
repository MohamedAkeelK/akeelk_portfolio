import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/coder2.json";
import "./Hero.css";
import { FaArrowAltCircleDown } from "react-icons/fa";

// import Navbar from "../Navbar/Navbar";

export default function Hero() {
  return (
    <div className="hero">
      <Lottie animationData={animationData} className="lottieCoder" />
      <div className="HeroText">
        <h1 className="hero-big-text">
          Hi, my
          <br /> name is Akeel.
        </h1>
        <p className="hero-small-text">
          dedicated and versatile Full-Stack Developer driven to bring impactful
          and innovative solutions to the fore. I love creating beautiful user
          experiences.
        </p>
        <div className="hero-cta">
          <a href="#About">Learn More </a>
          <a href="#About">
            <FaArrowAltCircleDown className="arrow-down" />
          </a>
        </div>
      </div>
    </div>
  );
}
