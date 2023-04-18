import styled from "styled-components";
import { Element } from "react-scroll";
// Data

// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import education from "../images/koc.jpg";

const StyledEducation = styled.section`
  p {
    font-size: 1.15rem;
    text-align: center;
  }
  pb {
    font-size: 1.5rem;
    text-align: center;
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

export default function Education() {


  return (
    <Element name={"Education"} id="education">
      <StyledEducation className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Education</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <br />
                <br />
                <pb>Koç University</pb>
                <br />
                <br />
                <p>Computer Enginnering (Double Major)</p>
                <pd>01/2021 &ndash; 06/2023 İstanbul, T&uuml;rkiye</pd>

                <br />
                <br />
                <pb>Koç University</pb>
                <br />
                <br />
                <p>Electrical and Electronics Enginnering</p>
                <pd>08/2017 &ndash; 06/2023 İstanbul, T&uuml;rkiye</pd>

                <br />
                <br />
                <pb>Kars Fen Lisesi</pb>
                <br />
                <br />
                <pd>09/2013 &ndash; 06/2017 Kars, T&uuml;rkiye</pd>
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={education}
                alt="koc"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
        </Container>
      </StyledEducation>
    </Element>
  );
}
