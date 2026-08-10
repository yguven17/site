import { Element } from "react-scroll";
import styled from "styled-components";
// Data
import { skillGroups, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledSkills = styled.section`
  .skill-group {
    border-top: 1px solid var(--line);
    padding-top: 1rem;
    height: 100%;
  }

  .skill-group-label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.85rem;
  }

  .skill-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .skill-list li {
    font-size: 0.9rem;
    line-height: 1.2;
    padding: 0.35rem 0.7rem;
    border: 1px solid var(--line);
    border-radius: 2rem;
    white-space: nowrap;
  }
`;

export default function Skills() {
  return (
    <Element name={"Skills"} id="skills">
      <StyledSkills className="section">
        <Container>
          <Title>
            <h2>Skills</h2>
            <div className="underline"></div>
          </Title>
          <Row xs={1} md={2} className="g-4 mt-1">
            {skillGroups.map((group) => (
              <Col key={group.id}>
                <div className="skill-group">
                  <h3 className="skill-group-label">{group.label}</h3>
                  <ul className="skill-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
          {resume && (
            <Container className="text-center">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline-light" className="mt-5">
                  Resume
                </Button>
              </a>
            </Container>
          )}
        </Container>
      </StyledSkills>
    </Element>
  );
}
