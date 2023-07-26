import React from "react";
import { useParams } from "react-router-dom";
import ProjectList from "../helpers/ProjectList";

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  let aName = "GitHub";

  let projectLink = 0;
  if (project.link.length > 1) {
    projectLink = 1;
  }
  if (projectLink === 1) {
    return (
      <div className="project">
        <h1>{project.name}</h1>
        <h2>
          {
            <a href={project.link} target="_blannk" rel="noopener noreferrer">
              {" "}
              {aName}{" "}
            </a>
          }
        </h2>
        <img src={project.image} alt="" />
        <p>
          <b>Skills: </b>
          {project.skills}
        </p>
      </div>
    );
  } else {
    return (
      <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt="" />
        <p>
          <b>Skills: </b>
          {project.skills}
        </p>
      </div>
    );
  }
}

export default ProjectDisplay;
