import React from "react";
import "../styles/About.css";
import asu from "../images/Arizona_State_University_seal.svg.png";
import upenn from "../images/UniversityofPennsylvania_Shield_RGB-2.png";
import basketball from "../images/Basketball.jpg";
import traveling from "../images/Traveling.jpg";
import coffee from "../images/Coffee.jpg";
import cooking from "../images/Cooking.jpg";
import nationalParks from "../images/National Parks.jpg";
import spanish from "../images/Spanish.jpg";
import photography from "../images/photography.jpg";

function About() {
  return (
    // <div className="construction">
    //   <ConstructionIcon style={{ height: "120px", width: "80px" }} />
    //   <p>Under Construction</p>
    // </div>
    <div className="aboutMe">
      <h1>About Me</h1>
      <div
        className="education"
        style={{ fontSize: "1.1em", lineHeight: "1.6" }}
      >
        <h3>My Academic Journey</h3>
        <img style={{ width: "130px" }} src={asu} alt="" />
        <img style={{ width: "120%" }} src={upenn} alt="" />
        <p>
          I transitioned into software engineering and data science after
          earning a Bachelor's in Biomedical Sciences (major) and Biochemistry
          (minor) from Arizona State University. During my undergrad, I gained
          hands-on experience as a Research Assistant at the Global Sport
          Institute and a Teaching Assistant for Intro to Biology courses.
          <br></br>
          <br></br>
          Initially pursuing a medical career, I worked as a medical scribe but
          found myself more fascinated by electronic medical record software
          than patient care. This curiosity led me to explore software
          development, sparking a deep passion for technology. To build a strong
          technical foundation, I pursued a Master's in Computer and Information
          Technology (MCIT) at the University of Pennsylvania, where I gained
          expertise in algorithms, databases, machine learning, and software
          development through rigorous coursework and real-world projects.{" "}
          <br></br>
          <br></br>Now, as a Data Science Analyst at Microchip Technologies, I
          apply my skills to drive meaningful impact in industry.
          <br></br>
        </p>
      </div>
      <br></br>
      <hr style={{ margin: "40px 0", border: "1px solid #ccc" }} />
      <div
        className="personalFacts"
        style={{
          fontSize: "1.1em",
          lineHeight: "1.6",
          textAlign: "center",
          position: "relative",
          height: "350px",
        }}
      >
        <h3>Hobbies</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            height: "100%",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "10%",
              left: "20%",
              fontSize: "2em",
              fontWeight: "bold",
              color: "#2c3e50",
            }}
          >
            Basketball
          </span>
          <span
            style={{
              position: "absolute",
              top: "30%",
              left: "60%",
              fontSize: "1.8em",
              fontWeight: "bold",
              color: "#e74c3c",
            }}
          >
            National Parks
          </span>
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              fontSize: "2.2em",
              fontWeight: "bold",
              color: "#3498db",
            }}
          >
            Traveling
          </span>
          <span
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#f39c12",
            }}
          >
            Coffee
          </span>
          <span
            style={{
              position: "absolute",
              top: "20%",
              left: "80%",
              fontSize: "1.9em",
              fontWeight: "bold",
              color: "#8e44ad",
            }}
          >
            Spanish
          </span>
          <span
            style={{
              position: "absolute",
              top: "40%",
              left: "40%",
              fontSize: "1.8em",
              fontWeight: "bold",
              color: "#16a085",
            }}
          >
            Cooking
          </span>
          <span
            style={{
              position: "absolute",
              top: "60%",
              left: "70%",
              fontSize: "1.9em",
              fontWeight: "bold",
              color: "#9b59b6",
            }}
          >
            Photography
          </span>
        </div>
      </div>

      <br></br>
      <hr style={{ margin: "40px 0", border: "1px solid #ccc" }} />

      <div
        className="photosSection"
        style={{ marginTop: "40px", position: "relative", height: "450px" }} // Increased container height
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            height: "100%",
          }}
        >
          <img
            src={basketball} // Replace with your actual image URL
            alt="Basketball"
            style={{
              position: "absolute",
              top: "10%",
              left: "20%",
              width: "200px", // Increased width
              height: "200px", // Increased height
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={nationalParks} // Replace with your actual image URL
            alt="National Parks"
            style={{
              position: "absolute",
              top: "35%",
              left: "55%",
              width: "200px", // Increased width
              height: "200px", // Increased height
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={traveling} // Replace with your actual image URL
            alt="Traveling"
            style={{
              position: "absolute",
              top: "25%",
              left: "5%",
              width: "200px", // Increased width
              height: "200px", // Increased height
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={coffee} // Replace with your actual image URL
            alt="Coffee"
            style={{
              position: "absolute",
              top: "55%",
              left: "45%",
              width: "200px", // Increased width
              height: "200px", // Increased height
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={spanish} // Replace with your actual image URL
            alt="Spanish"
            style={{
              position: "absolute",
              top: "15%",
              left: "75%",
              width: "200px", // Increased width
              height: "200px", // Increased height
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={cooking} // Replace with your actual image URL
            alt="Cooking"
            style={{
              position: "absolute",
              top: "35%",
              left: "30%",
              width: "200px", // Increased width
              height: "200px", // Increased height
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={photography} // Replace with your actual image URL
            alt="Photography"
            style={{
              position: "absolute",
              top: "65%",
              left: "60%",
              width: "200px", // Increased width
              height: "200px", // Increased height
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
