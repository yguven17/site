import styled from "styled-components";
import { Element } from "react-scroll";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledEducation = styled.section`
  .entries {
    display: grid;
    gap: 2.25rem;
    max-width: 62rem;
  }

  .entry {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.35rem 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--line);
  }

  .school {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.3rem;
  }

  .degree {
    margin: 0;
    font-size: 0.98rem;
    color: rgba(232, 238, 244, 0.8);
  }

  .period {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    white-space: nowrap;
    margin: 0;
  }

  .footnotes {
    margin-top: 2.25rem;
    display: grid;
    gap: 0.75rem;
    max-width: var(--measure);
  }

  .footnotes p {
    margin: 0;
    font-size: 0.95rem;
    color: rgba(232, 238, 244, 0.8);
  }

  .footnotes .label {
    display: block;
    margin-bottom: 0.2rem;
  }
`;

const EDUCATION = [
  {
    school: "Koç University",
    degree: "B.Sc. Computer Engineering (Double Major) — Full Scholarship",
    period: "2021 — 2023 · İstanbul",
  },
  {
    school: "Koç University",
    degree:
      "B.Sc. Electrical and Electronics Engineering — Full Scholarship",
    period: "2017 — 2023 · İstanbul",
  },
  {
    school: "Kars Fen Lisesi",
    degree: "Science high school",
    period: "2013 — 2017 · Kars",
  },
];

export default function Education() {
  return (
    <Element name={"Education"} id="education">
      <StyledEducation className="section">
        <Container>
          <Title>
            <h2>Education</h2>
            <div className="underline"></div>
          </Title>
          <div className="entries">
            {EDUCATION.map((item) => (
              <div className="entry" key={item.school + item.period}>
                <div>
                  <h3 className="school">{item.school}</h3>
                  <p className="degree">{item.degree}</p>
                </div>
                <p className="period">{item.period}</p>
              </div>
            ))}
          </div>
          <div className="footnotes">
            <p>
              <span className="label">Honors</span>
              Vehbi Koç Scholar (3 times) · Koç University Anatolian Scholarship
              Program
            </p>
            <p>
              <span className="label">Languages</span>
              Turkish, English
            </p>
          </div>
        </Container>
      </StyledEducation>
    </Element>
  );
}
