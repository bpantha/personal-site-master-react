import React from "react";
import "../styles/About.css";
import asu from "../images/Arizona_State_University_seal.svg.png";
import upenn from "../images/UniversityofPennsylvania_Shield_RGB-2.png";
function About() {
  return (
    // <div className="construction">
    //   <ConstructionIcon style={{ height: "120px", width: "80px" }} />
    //   <p>Under Construction</p>
    // </div>
    <div className="aboutMe">
      <h1>About Me</h1>
      <div className="education">
        <h3>My Academic Journey</h3>
        <img style={{ width: "130px" }} src={asu} alt="" />
        <img style={{ width: "120%" }} src={upenn} alt="" />
        <p>
          I made a career transition into the field of software engineering and
          data science after completing my Bachelor's degree in Biomedical
          Sciences with a minor in Biochemistry at Arizona State University
          (ASU). While pursuing my undergraduate studies, I gained practical
          experience as a Research Assistant at the Global Sport Institute and
          also served as a Teaching Assistant for Intro to Biology courses.
          During this time, I realized my strong interest in the technical
          aspects of data analysis and programming. <br></br>
          <br></br>Motivated by this newfound passion, I decided to further
          enhance my technical skills and pursue a Master's degree in the MCIT
          program at the University of Pennsylvania (UPenn). This program
          provided me with a solid foundation in computer science principles,
          programming languages, and data analysis techniques. <br></br>
          <br></br>Throughout my time at UPenn, I immersed myself in intensive
          coursework focused on software engineering and data science. I delved
          into various topics, including algorithms, database management,
          machine learning, and software development. This academic journey
          equipped me with the necessary technical expertise to excel in the
          fields of software engineering and data science. Moreover, I had the
          opportunity to apply my knowledge and skills to real-world projects,
          both independently and as part of a team.
        </p>
      </div>
    </div>
  );
}

export default About;
