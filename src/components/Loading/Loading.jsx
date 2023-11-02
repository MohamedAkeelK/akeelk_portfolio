import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/loadbar.json";
import "./Loading.css"

export default function Loading() {
  return (
    <div className="loadingAnimation">
      <Lottie animationData={animationData} />
    </div>
  );
}
