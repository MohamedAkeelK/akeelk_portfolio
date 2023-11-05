import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/coder2.json";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";

export default function Hero() {
  return (
    <div className="hero">
      <Lottie animationData={animationData} className="lottieCoder" />
      <div className="rightHeroText">
        <h1 className="hero-big-text">
          Hi, my
          <br /> name is Akeel.
        </h1>
        <p className="hero-small-text">
          I love creating beautiful user experiences.
        </p>
      </div>
    </div>
  );
}
