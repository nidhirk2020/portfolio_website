import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify
} from "react-icons/si";

const tools = [
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiNetlify />, name: "Netlify" },
];

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons text-center">
          <div style={{ fontSize: "3rem" }}>{tool.icon}</div>
          <p style={{ marginTop: "10px", fontSize: "1rem", fontWeight: "bold" }}>
            {tool.name}
          </p>
        </Col>
      ))}
    </Row>
  );
};

export default Toolstack;

