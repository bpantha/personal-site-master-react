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
    <div className="aboutMe">
      <h1>About Me</h1>
      <div
        className="education"
        style={{ fontSize: "1.1em", lineHeight: "1.6" }}
      >
        <h3>My Academic Journey</h3>
        <img style={{ width: "130px" }} src={asu} alt="ASU" />
        <img style={{ width: "120%" }} src={upenn} alt="UPenn" />
        <p>
          I transitioned into software engineering and data science after
          earning a Bachelor's in Biomedical Sciences (major) and Biochemistry
          (minor) from Arizona State University. During my undergrad, I gained
          hands-on experience as a Research Assistant at the Global Sport
          Institute and a Teaching Assistant for Intro to Biology courses.
          <br />
          <br />
          Initially pursuing a medical career, I worked as a medical scribe but
          found myself more fascinated by electronic medical record software
          than patient care. This curiosity led me to explore software
          development, sparking a deep passion for technology. To build a strong
          technical foundation, I pursued a Master's in Computer and Information
          Technology (MCIT) at the University of Pennsylvania, where I gained
          expertise in algorithms, databases, machine learning, and software
          development through rigorous coursework and real-world projects.
          <br />
          <br />
          Now, as a Data Science Analyst at Microchip Technologies, I apply my
          skills to drive meaningful impact in industry.
          <br />
        </p>
      </div>
      <br />
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
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            justifyItems: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span
            style={{
              fontSize: "2em",
              fontWeight: "bold",
              color: "#2c3e50",
            }}
          >
            Basketball
          </span>
          <span
            style={{
              fontSize: "1.8em",
              fontWeight: "bold",
              color: "#e74c3c",
            }}
          >
            National Parks
          </span>
          <span
            style={{
              fontSize: "2.2em",
              fontWeight: "bold",
              color: "#3498db",
            }}
          >
            Traveling
          </span>
          <span
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#f39c12",
            }}
          >
            Coffee
          </span>
          <span
            style={{
              fontSize: "1.9em",
              fontWeight: "bold",
              color: "#8e44ad",
            }}
          >
            Spanish
          </span>
          <span
            style={{
              fontSize: "1.8em",
              fontWeight: "bold",
              color: "#16a085",
            }}
          >
            Cooking
          </span>
          <span
            style={{
              fontSize: "1.9em",
              fontWeight: "bold",
              color: "#9b59b6",
            }}
          >
            Photography
          </span>
        </div>
      </div>

      <br />
      <hr style={{ margin: "40px 0", border: "1px solid #ccc" }} />

      <div
        className="photosSection"
        style={{ marginTop: "40px", position: "relative", height: "450px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            justifyItems: "center",
            alignItems: "center",
            position: "relative",
            height: "100%",
          }}
        >
          <img
            src={basketball}
            alt="Basketball"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={nationalParks}
            alt="National Parks"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={traveling}
            alt="Traveling"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={coffee}
            alt="Coffee"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={spanish}
            alt="Spanish"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={cooking}
            alt="Cooking"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={photography}
            alt="Photography"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .photosSection {
            height: auto;
          }
          .photosSection img {
            width: 150px;
            height: 150px;
          }
          .personalFacts {
            height: auto;
          }
        }

        @media (max-width: 480px) {
          .photosSection {
            height: auto;
          }
          .photosSection img {
            width: 130px;
            height: 130px;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
