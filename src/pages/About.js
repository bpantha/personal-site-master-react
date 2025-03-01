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
      <div className="education">
        <h3>My Academic Journey</h3>
        <div className="images">
          <img className="asu" src={asu} alt="ASU" />
          <img className="upenn" src={upenn} alt="Upenn" />
        </div>
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
        </p>
      </div>

      <hr />

      <div className="personalFacts">
        <h3>Hobbies</h3>
        <div className="hobby-items">
          <span className="hobby-item">Basketball</span>
          <span className="hobby-item">National Parks</span>
          <span className="hobby-item">Traveling</span>
          <span className="hobby-item">Coffee</span>
          <span className="hobby-item">Spanish</span>
          <span className="hobby-item">Cooking</span>
          <span className="hobby-item">Photography</span>
        </div>
      </div>

      <hr />

      <div className="photosSection">
        <div className="image-gallery">
          <img className="photo" src={basketball} alt="Basketball" />
          <img className="photo" src={nationalParks} alt="National Parks" />
          <img className="photo" src={traveling} alt="Traveling" />
          <img className="photo" src={coffee} alt="Coffee" />
          <img className="photo" src={spanish} alt="Spanish" />
          <img className="photo" src={cooking} alt="Cooking" />
          <img className="photo" src={photography} alt="Photography" />
        </div>
      </div>

      <style jsx>{`
        /* General styles */
        .aboutMe {
          padding: 20px;
        }

        h1 {
          text-align: center;
          font-size: 2.5em;
        }

        h3 {
          font-size: 1.8em;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.1em;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        /* Images section */
        .images {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .asu,
        .upenn {
          width: 130px;
          max-width: 100%;
        }

        hr {
          margin: 40px 0;
          border: 1px solid #ccc;
        }

        /* Personal Facts section */
        .personalFacts {
          text-align: center;
          margin-top: 20px;
        }

        .hobby-items {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .hobby-item {
          font-size: 1.5em;
          font-weight: bold;
          color: #2c3e50;
        }

        /* Photos Section */
        .photosSection {
          position: relative;
          margin-top: 40px;
        }

        .image-gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .photo {
          width: 200px;
          height: 200px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .aboutMe {
            padding: 10px;
          }

          h1 {
            font-size: 2em;
          }

          h3 {
            font-size: 1.5em;
          }

          p {
            font-size: 1em;
          }

          .images {
            flex-direction: column;
            align-items: center;
          }

          .asu,
          .upenn {
            width: 100px;
          }

          .hobby-items {
            flex-direction: column;
            align-items: center;
          }

          .photo {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 480px) {
          .aboutMe {
            padding: 5px;
          }

          h1 {
            font-size: 1.5em;
          }

          h3 {
            font-size: 1.3em;
          }

          p {
            font-size: 0.9em;
          }

          .hobby-item {
            font-size: 1.3em;
          }

          .photo {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
