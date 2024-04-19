import React, { Fragment } from "react";
import Helmet from "react-helmet";
import MyResume from "../resume/Resume_Samiya.pdf";

const pageTitle = "Resume";

const Resume = () => {
  return (
    <Fragment>
      <Helmet>
        <title>{pageTitle} - Samiya Farooquee</title>
      </Helmet>
      <h1>Resume</h1>
      <div className="btn">
        <a href={MyResume} download="Resume_Samiya.pdf">
          <strong>Download Resume!</strong>
        </a>
      </div>
    </Fragment>
  );
};

export default Resume;
