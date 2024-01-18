import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page" id="About">
      <h1 className="expertise-title">About Me</h1>
      <div className="about-ctr">
        <div className="about-left-img"></div>
        <div className="about-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
          fugiat? Eveniet blanditiis pariatur eos architecto, aperiam possimus
          ipsa neque consequuntur fuga consectetur, iste quisquam illo quod
          deserunt delectus eaque enim! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Provident in nemo consectetur possimus error
          aliquid, illum fugit quia libero, velit molestias illo ullam at porro
          vero sequi nisi asperiores! Blanditiis.
        </div>
        <div className="right"></div>
      </div>

      {/* <h1 className="expertise-title">About</h1>
      <div className="expertise-box-ctr">
        <div className="expertise-box expertise-box-1">
          <h1>Software Development</h1>
          <p>
            Experienced in both functional and OOP: Dart, Python, Java,
            JavaScript, TypeScript.
          </p>
        </div>
        <div className="expertise-box expertise-box-2">
          <h1>Frontend Dev React, NextJS</h1>
          <p>
            Passionate about UI/UX. Over 4 years of development experience in
            HTML, CSS, JS, React and NextJS frameworks.
          </p>
        </div>
        <div className="expertise-box expertise-box-3">
          <h1>Flutter Dev Android, iOS</h1>
          <p>
            Skilled in developing hybrid mobile apps and cross-platform
            solutions using the Flutter framework.
          </p>
        </div>
      </div> */}
    </div>
  );
}
