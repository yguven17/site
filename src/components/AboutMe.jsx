import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import me from "../images/photo.jpeg";

const StyledAboutMe = styled.section`
  .bio p {
    font-size: 1.08rem;
    line-height: 1.75;
    color: rgba(232, 238, 244, 0.82);
    max-width: var(--measure);
    margin: 0;
  }

  .bio p + p {
    margin-top: 1.1rem;
  }

  .portrait {
    width: 100%;
    max-width: 17rem;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 0.75rem;
    border: 1px solid var(--line);
  }

  .facts {
    display: grid;
    gap: 0.65rem;
    margin-top: 2rem;
  }

  .fact {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: baseline;
    font-size: 0.92rem;
    color: rgba(232, 238, 244, 0.8);
    margin: 0;
  }

  .fact .label {
    flex: 0 0 5.5rem;
  }
`;

export default function AboutMe() {
  const { bio, location } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Title>
            <h2>About</h2>
            <div className="underline"></div>
          </Title>
          <Row className="g-4 align-items-start">
            <Col xs={12} md={7} lg={8}>
              <div className="bio">
                {bio && <p>{bio}</p>}
                {moreInfo.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <div className="facts">
                <p className="fact">
                  <span className="label">Role</span>
                  Backend Developer &amp; Systems Engineer
                </p>
                <p className="fact">
                  <span className="label">Backend</span>
                  REST APIs · distributed services · data pipelines
                </p>
                <p className="fact">
                  <span className="label">Systems</span>
                  Databases · messaging · third-party and industrial
                  integrations
                </p>
                <p className="fact">
                  <span className="label">DevOps</span>
                  Docker · CI · Linux · AWS, GCP, Hetzner and on-premise
                </p>
                <p className="fact">
                  <span className="label">Based in</span>
                  {location || "İstanbul, Türkiye"}
                </p>
              </div>
            </Col>
            <Col xs={12} md={5} lg={4} className="text-md-end">
              <img
                src={me}
                alt="Yakup Enes Güven"
                loading="lazy"
                className="portrait"
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
