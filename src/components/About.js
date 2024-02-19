import React, { Fragment } from "react";
import "../css/About.css";

export default function About() {
  return (
    <Fragment>
      <h1>About</h1>
      <div className="about-container">
        <div className="inner-container">
          <p>
            Samiya Farooquee is a self-taught developer specializing in Robotics
            Engineering.
          </p>
          <p>
            Recent Computer Science and Engineering graduate with a focus on AI,
            ML, Robotics, and Data Science.
          </p>
          <p>
            Proficient in Python, specializing in ROS, SLAM, and data-driven
            approaches.
          </p>
          <p>
            Actively seeking opportunities to contribute to innovative projects.
            Let's connect if you share a passion for tech and data!
          </p>
        </div>
      </div>
    </Fragment>
  );
}
