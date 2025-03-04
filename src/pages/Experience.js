import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Projects.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ClassIcon from "@mui/icons-material/Class";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Arizona State University, Tempe, AZ
          </h3>
          <p>Bachelors - Barrett the Honors College</p>
          <p>Biomedical Sciences and Biochemistry</p>
          <p>Summa Cum Laude</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Undergraduate Teaching Assistant - School of Life Sciences, ASU
          </h3>
          <p>Tempe, AZ</p>
          <p>Supported BIO 281 and BIO 282 at ASU</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Pennsylvania, Philadelphia, PA
          </h3>
          <p>Masters</p>
          <p>Computer and Information Technology</p>
          <p>Magna Cum Laude</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2022"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<ClassIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CodePath - Apprentice
          </h3>
          <p>Refined skills in Python, Data Structures, Algorithms</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Head Academic Coach - School of Engineering and Applied Sciences,
            UPenn
          </h3>
          <p>Support students in the Intro to Software Developoment Course</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023-Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Data Science Anayst - Microchip Technologies
          </h3>
          <p>Python, SQL, Azure, Tableau, LLMs</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
