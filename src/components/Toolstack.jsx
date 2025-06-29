import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiGithub, SiWindows, SiVercel, SiEclipseide } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Windows">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiEclipseide />
      </Col>
    </Row>
  );
}

export default Toolstack;
