import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiExpress,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const skills = [
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React.js" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <DiJava />, name: "Java" },
  { icon: <DiGit />, name: "Git" },
];

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons text-center">
          <div style={{ fontSize: "3rem" }}>{skill.icon}</div>
          <p style={{ marginTop: "10px", fontSize: "1rem", fontWeight: "bold" }}>
            {skill.name}
          </p>
        </Col>
      ))}
    </Row>
  );
};

export default Techstack;


