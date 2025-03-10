import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
import headshot from "../images/Screenshot 2023-06-26 at 1.59.07 PM.png";
import snowy from "../images/snowy_flight.jpg";
import Resume from "../resume/bidur_resume.pdf";

function Home() {
  return (
    <div className="home">
      <div
        className="about"
        style={{
          backgroundImage: `url(${snowy})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="drop first">
          {" "}
          <h2>Hi, My Name is Jay</h2>
        </div>
        <div className="headShot">
          <img className="responsive-image" src={headshot} alt="" />
        </div>
        <div>
          {" "}
          <p style={{ fontSize: "30px" }}> Data Scientist </p>
        </div>

        <div className="prompt">
          <a
            href="https://www.linkedin.com/in/bidurpantha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/bpantha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:jaypantha21@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
        </div>

        <div className="resume">
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <p style={{ color: "white" }}>Resume March 2025</p>
          </a>
        </div>
      </div>

      <div className="skills">
        {" "}
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>Python, JavaScript, JAVA, C</span>
          </li>
          <li className="item">
            <h2>Data</h2>
            <span>
              SQL, Tableau, Pandas, AI Implementation, PySpark, PyTorch
            </span>
          </li>
          <li className="item">
            <h2>Web</h2>
            <span>Node.js, Express.js, React.js</span>
          </li>

          <li className="item">
            <h2>Cloud Technologies</h2>
            <span>Azure (DevOps, Repos), AWS(RDS, S3)</span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>Github, Excel, Docker</span>
          </li>
          <li className="item">
            <h2>IDE/Environments</h2>
            <span>
              Visual Studio Code, InteliJ IDEA, Eclipse, PyCharm, DataGrip{" "}
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
