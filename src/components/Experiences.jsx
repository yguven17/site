import styled from "styled-components";
import { Element } from "react-scroll";
// Data

// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import company from "../images/smartopt-logo.jpg";

const StyledExperineces = styled.section`
  p {
    font-size: 1.15rem;
    text-align: left;
  }
  pb {
    font-size: 1.5rem;
    text-align: left;
    font-weight: bold;
    font-family: "Permanent Marker";
  }
  pd {
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
    <Element name={"Experineces"} id="experineces">
      <StyledExperineces className="section">
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
                <pb>SmartOpt, Part-time Working Student</pb>
                <br />
                <br />
                <pd>04/2023 &ndash; present İstanbul, T&uuml;rkiye</pd>
                <p>
                  &bull;Python Developer
                  <br />
                  &bull;Django Developer
                </p>

                <pb>Siemens, Part-time Working Student</pb>
                <br />
                <br />
                <pd>01/2023 &ndash; 04/2023 İstanbul, T&uuml;rkiye</pd>
                <p>
                  &bull;DevOps
                  <br />
                  &bull;Configuration Management
                  <br />
                  &bull;Installing virtual machines and setting up Jenkins,
                  Docker tasks
                </p>

                <pb>
                  Schneider Electric, System Software Architecture Engineer Part
                  Timer
                </pb>
                <br />
                <br />
                <pd>01/2022 &ndash; 01/2023 İstanbul, T&uuml;rkiye</pd>
                <p>
                  &bull;System Architecture (AVEVA software's, project
                  interfaces and necessary data and simulations for the project)
                  (4 months)
                  <br />
                  &bull;IT (error analysis and reporting systems and application
                  development, Project construction with Python, working with
                  shell) (1 month)
                  <br />
                  &bull;Industry Sales Team (sales of products analysis and
                  systems to companies, Python coding to streamline sales
                  processes) (1 month)
                  <br />
                  &bull;PLC and SCADA Systems (system examination, software and
                  setup) (4 months)
                </p>

                <pb>Siemens, Intern</pb>
                <br />
                <br />
                <pd>06/2021 &ndash; 07/2021 İstanbul, T&uuml;rkiye</pd>
                <p>
                  &bull;PLC and SCADA (to examine automation systems and monitor
                  errors in the system)
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
      </StyledExperineces>
    </Element>
  );
}
