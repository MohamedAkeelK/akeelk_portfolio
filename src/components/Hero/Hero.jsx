import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/coder.json";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <Lottie animationData={animationData} className="lottieCoder" />
      <div className="rightHeroText">
        <h1>Hi, i'm Mohamed Akeel Khan</h1>
        <h2>a Software Engineer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
          quaerat.
        </p>
      </div>
    </div>
  );
}
