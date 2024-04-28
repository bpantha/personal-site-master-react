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
          Sciences(major) and Biochemistry(minor) at Arizona State University.
          While pursuing my undergraduate studies, I gained practical experience
          as a Research Assistant at the Global Sport Institute and also served
          as a Teaching Assistant for Intro to Biology courses.
          <br></br>
          <br></br>
          After completing my undergraduate degree, I decided to gain some
          experience before pursuing medical school, so I worked as a medical
          scribe. Although I initially thought patient care would be my calling,
          I found myself more intrigued by the electronic medical record
          software. Technology and software had always piqued my interest, but I
          hesitated to pursue a career in that field, assuming medicine was my
          natural path. However, during some time off, I took the opportunity to
          delve into software development and discovered a deep passion for it.
          I was amazed by the impact that computers and technology can have on
          various industries and how much there was to learn. Motivated by this
          newfound passion, I decided to further enhance my technical skills and
          pursue a Master's degree in the MCIT program at the University of
          Pennsylvania. This program provided me with a solid foundation in
          computer science principles, programming languages, and data analysis
          techniques. <br></br>
          <br></br>Throughout my time at UPenn, I immersed myself in intensive
          coursework focused on software engineering and data science. I delved
          into various topics, including algorithms, database management,
          machine learning, and software development. This academic journey
          equipped me with the necessary technical expertise to excel in the
          fields of software engineering and data science. Moreover, I had the
          opportunity to apply my knowledge and skills to real-world projects,
          both independently and as part of a team.
          <br></br>
          <br></br>
          Now working as a Software Engineer at Microchip Technologies, I am
          able to I leverage my expertise to drive meaningful impact.
        </p>
      </div>
    </div>
  );
}

export default About;
