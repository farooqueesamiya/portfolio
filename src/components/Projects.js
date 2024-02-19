import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Project from "./Project";
import "../css/Projects.css";

const pageTitle = "Projects";

export default function Projects() {
  return (
    <Fragment>
      <Helmet>
        <title>{pageTitle} - Samiya Farooquee</title>
      </Helmet>
      <h1>Projects</h1>
      <div className="projects">
        <div className="projects_list">
          <Project
            name="FRIDAY"
            description="The Object Following Robot using Raspberry Pi."
            type="Raspberry Pi | RPi Camera | HSV Color Space | Python"
            date="May 2023"
            link="https://github.com/farooqueesamiya/FRIDAY-The-Object-Following-Robot"
            linkText="GitHub"
          />
          <Project
            name="Odometry and Position Estimation for Mobile Robot"
            description="Odometry and Position Estimation for Mobile Robot"
            type="PID Controller | MATLAB | Python"
            date="April 2023"
            link="https://github.com/farooqueesamiya/Odometry-and-Position-Estimation-for-Mobile-Robot"
            linkText="GitHub"
          />
          <Project
            name="Autonomous Mobile Robot with IR Sensors and Motor Control Arduino UNO"
            description="Autonomous Mobile Robot with IR Sensors and Motor Control Arduino UNO"
            type="PID Controller | MATLAB | Python"
            date="April 2023"
            link="https://github.com/farooqueesamiya/Autonomous-Mobile-Robot"
            linkText="GitHub"
          />
          <Project
            name="EDITH"
            description="The Motion Following Robot using Arduino UNO."
            type="Ulrasonic Sensor | IR Sensor | Arduino"
            date="Nov 2022"
            link="https://github.com/farooqueesamiya/EDITH-Human-Following-Robot"
            linkText="GitHub"
          />
        </div>
      </div>
    </Fragment>
  );
}
