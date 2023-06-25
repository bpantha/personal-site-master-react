import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Jay</h2>
        <div className="prompt">
          <p>Software - Data Science</p>
          <LinkedInIcon />
          <GitHubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        {" "}
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2>FrontEnd</h2>
            <span></span>
          </li>
          <li className="item">
            <h2>BackEnd</h2>
            <span></span>
          </li>
          <li className="item">
            <h2>Data</h2>
            <span></span>
          </li>
          <li className="item">
            <h2>Environments/IDEs</h2>
            <span></span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
