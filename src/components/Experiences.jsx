import styled from "styled-components";
import { Element } from "react-scroll";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledExperiences = styled.section`
  .timeline {
    position: relative;
    display: grid;
    gap: 3rem;
    max-width: 62rem;
  }

  .entry {
    position: relative;
    padding-left: 1.75rem;
    border-left: 1px solid var(--line);
  }

  .entry::before {
    content: "";
    position: absolute;
    left: -0.3rem;
    top: 0.5rem;
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    background: var(--accent);
  }

  .entry-header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.5rem 1.5rem;
    margin-bottom: 1rem;
  }

  .role {
    font-family: var(--font-display);
    font-size: clamp(1.15rem, 2.4vw, 1.4rem);
    font-weight: 600;
    letter-spacing: -0.01em;
    margin: 0;
  }

  .company {
    color: var(--accent);
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

  .duties {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.7rem;
    max-width: var(--measure);
  }

  .duties li {
    position: relative;
    padding-left: 1.1rem;
    font-size: 0.98rem;
    line-height: 1.65;
    color: rgba(232, 238, 244, 0.8);
  }

  .duties li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.72em;
    width: 0.35rem;
    height: 1px;
    background: var(--muted);
  }

  .duties strong {
    color: var(--text);
    font-weight: 600;
  }
`;

const EXPERIENCE = [
  {
    company: "SmartOpt",
    role: "Backend Developer & Systems Engineer",
    period: "Apr 2023 — Present · İstanbul",
    duties: [
      <>
        Design, develop, and operate Python/Django backend services, REST APIs,
        and data pipelines for enterprise optimization, forecasting, and AI
        platforms deployed across AWS, GCP, Hetzner, and on-premise environments.
      </>,
      <>
        <strong>BSH Container Yard</strong> — built and maintained a
        container-tracking backend integrating multiple third-party APIs and
        supporting tens of thousands of import/export transactions daily; owned
        backend development, deployment, and production maintenance.
      </>,
      <>
        <strong>TOFAŞ EMDHO</strong> — developed an autonomous closed-loop system
        that ingests OPC/SCADA data into a machine-learning pipeline and writes
        model outputs back to operational tags using Django and Docker.
      </>,
      <>
        <strong>Şişecam TDI</strong> — implemented the backend and DevOps
        foundation for a scenario-based AI prediction platform, reliably
        processing historical and future scenario inputs and outputs.
      </>,
      <>
        <strong>EnergyOpt EPF</strong> — engineered multi-source data pipelines
        for daily, weekly, and annual electricity-price forecasting and ensured
        consistent model execution across local and cloud environments.
      </>,
      <>
        <strong>BSH PlanOpt and EU projects</strong> — integrated ASP, PLC, and
        SCADA data sources; built preprocessing and model-execution services;
        supported production operations for planning, mobility, and
        sustainability platforms.
      </>,
    ],
  },
  {
    company: "Siemens",
    role: "Part-time Working Student — DevOps",
    period: "Jan 2023 — Apr 2023 · İstanbul",
    duties: [
      <>
        Monitored development and test environments, followed deployment health,
        and supported ongoing development operations.
      </>,
      <>
        Provisioned virtual machines and configured Jenkins and Docker
        environments for new and existing projects.
      </>,
      <>
        Supported configuration management and environment readiness across
        project teams.
      </>,
    ],
  },
  {
    company: "Schneider Electric",
    role: "System Software Architecture Engineer — Part-time",
    period: "Jan 2022 — Jan 2023 · İstanbul",
    duties: [
      <>
        Supported system architecture and project interfaces using AVEVA
        software, simulations, and industrial data.
      </>,
      <>
        Developed Python and shell-based tooling for error analysis, reporting,
        and application workflows.
      </>,
      <>
        Worked with PLC and SCADA systems, including software setup, system
        analysis, and integration.
      </>,
    ],
  },
];

export default function Experiences() {
  return (
    <Element name={"Experiences"} id="experiences">
      <StyledExperiences className="section">
        <Container>
          <Title>
            <h2>Experience</h2>
            <div className="underline"></div>
          </Title>
          <div className="timeline">
            {EXPERIENCE.map((job) => (
              <article className="entry" key={job.company + job.period}>
                <header className="entry-header">
                  <h3 className="role">
                    <span className="company">{job.company}</span> — {job.role}
                  </h3>
                  <p className="period">{job.period}</p>
                </header>
                <ul className="duties">
                  {job.duties.map((duty, i) => (
                    <li key={i}>{duty}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </StyledExperiences>
    </Element>
  );
}
