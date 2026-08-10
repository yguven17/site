import styled from "styled-components";
import { Element } from "react-scroll";
// Data

// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import company from "../images/smartopt-logo.jpg";

const StyledExperiences = styled.section`
  p {
    font-size: 1.15rem;
    text-align: left;
  }
  .role {
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    font-family: "Permanent Marker";
    margin-top: 2rem;
  }
  .period {
    font-size: 1.25rem;
    text-align: center;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function Experiences() {
  return (
    <Element name={"Experiences"} id="experiences">
      <StyledExperiences className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Experiences</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <h3 className="role">
                  SmartOpt, Backend Developer &amp; Systems Engineer
                </h3>
                <p className="period">
                  04/2023 &ndash; present İstanbul, T&uuml;rkiye
                </p>
                <p>
                  &bull;Design, develop, and operate Python/Django backend
                  services, REST APIs, and data pipelines for enterprise
                  optimization, forecasting, and AI platforms deployed across
                  AWS, GCP, Hetzner, and on-premise environments.
                  <br />
                  &bull;BSH Container Yard: built and maintained a
                  container-tracking backend integrating multiple third-party
                  APIs and supporting tens of thousands of import/export
                  transactions daily; owned backend development, deployment, and
                  production maintenance.
                  <br />
                  &bull;TOFA&#350; EMDHO: developed an autonomous closed-loop
                  system that ingests OPC/SCADA data into a machine-learning
                  pipeline and writes model outputs back to operational tags
                  using Django and Docker.
                  <br />
                  &bull;&#350;i&#351;ecam TDI: implemented the backend and DevOps
                  foundation for a scenario-based AI prediction platform,
                  reliably processing historical and future scenario inputs and
                  outputs.
                  <br />
                  &bull;EnergyOpt EPF: engineered multi-source data pipelines for
                  daily, weekly, and annual electricity-price forecasting and
                  ensured consistent model execution across local and cloud
                  environments.
                  <br />
                  &bull;BSH PlanOpt and EU projects: integrated ASP, PLC, and
                  SCADA data sources; built preprocessing and model-execution
                  services; supported production operations for planning,
                  mobility, and sustainability platforms.
                </p>

                <h3 className="role">
                  Siemens, Part-time Working Student &ndash; DevOps
                </h3>
                <p className="period">
                  01/2023 &ndash; 04/2023 İstanbul, T&uuml;rkiye
                </p>
                <p>
                  &bull;Monitored development and test environments, followed
                  deployment health, and supported ongoing development
                  operations.
                  <br />
                  &bull;Provisioned virtual machines and configured Jenkins and
                  Docker environments for new and existing projects.
                  <br />
                  &bull;Supported configuration management and environment
                  readiness across project teams.
                </p>

                <h3 className="role">
                  Schneider Electric, System Software Architecture Engineer
                  &ndash; Part-time
                </h3>
                <p className="period">
                  01/2022 &ndash; 01/2023 İstanbul, T&uuml;rkiye
                </p>
                <p>
                  &bull;Supported system architecture and project interfaces
                  using AVEVA software, simulations, and industrial data.
                  <br />
                  &bull;Developed Python and shell-based tooling for error
                  analysis, reporting, and application workflows.
                  <br />
                  &bull;Worked with PLC and SCADA systems, including software
                  setup, system analysis, and integration.
                </p>
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={company}
                alt="company"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
        </Container>
      </StyledExperiences>
    </Element>
  );
}
