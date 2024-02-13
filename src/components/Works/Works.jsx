import React from "react";
import "./Works.css";

function Works() {
  return (
    <>
      <h1 className="works-title">My Works</h1>
      <div className="works-cards-ctr">
        <div className="works-card">
          <div className="works-card-img"></div>
          <div className="works-card-text">
            <h3 className="works-card-title">Name of Project</h3>
            <p>
              a breif description of project .... Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <ul className="works-tech-stack-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
        <div className="works-card">
          <div className="works-card-img"></div>
          <div className="works-card-text">
            <h3 className="works-card-title">Name of Project</h3>
            <p>
              a breif description of project .... Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <ul className="works-tech-stack-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>

        <div className="works-card">
          <div className="works-card-img"></div>
          <div className="works-card-text">
            <h3 className="works-card-title">Name of Project</h3>
            <p>
              a breif description of project .... Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <ul className="works-tech-stack-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
