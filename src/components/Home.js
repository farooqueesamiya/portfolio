import React from "react";
import Helmet from "react-helmet";
import "../css/Home.css";

export default function Home() {
  const pageTitle = "Hi, I'm Samiya";
  const pageContent = `I'm a self-taught Software Developer specialized in Robotics Engineering!`;
  const socialStyle = {
    color: "black",
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>Samiya Farooquee - Robotics Engineer</title>
        <meta name="description" content="{pageContent}" />
      </Helmet>
      <h1 className="name">{pageTitle}</h1>
      <p className="description">
        Robotics Engineer | Machine Learning Engineer
      </p>
      <h4 className="about">{pageContent}</h4>
      <p className="languages">
        Languages : Python | ROS | Arduino Programming
      </p>
      <div className="btn">
        <a href="mailto:ffaranm15@gmail.com">
          <strong>Hire me!</strong>
        </a>
      </div>
      <div className="social-container">
        <a
          href="https://in.pinterest.com/samiyafarooquee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i
            title="Follow me on Pinterest"
            className="fab fa-pinterest fa-2x"
            style={socialStyle}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/farooqueesamiya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i
            title="Connect with me on LinkedIn"
            className="fab fa-linkedin fa-2x"
            style={socialStyle}
          ></i>
        </a>
        <a
          href="https://github.com/farooqueesamiya"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i
            title="Find me on Github"
            className="fab fa-github  fa-2x"
            style={socialStyle}
          ></i>
        </a>
        <a
          href="mailto:farooqueesamiya@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i
            title="Mail me"
            className="fas fa-envelope fa-2x"
            style={socialStyle}
          ></i>
        </a>
      </div>
    </React.Fragment>
  );
}
