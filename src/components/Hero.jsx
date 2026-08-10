import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Link } from "react-scroll";
import styled from "styled-components";
// Icons
import { FaChevronCircleDown } from "react-icons/fa";
// Media
import Logo from "../images/logo.svg";
import { Dark } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Spin } from "./globalStyledComponents";
import SocialLinks from "./SocialLinks";

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(160deg, #16212B, var(--bg));
    z-index: -2;
  }

  /* Scrim weighted to the left so the headline stays readable over the artwork */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        rgba(11, 15, 20, 0.94) 0%,
        rgba(11, 15, 20, 0.82) 38%,
        rgba(11, 15, 20, 0.35) 70%,
        rgba(11, 15, 20, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(11, 15, 20, 0.5) 0%, transparent 30%);
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  }

  .name {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.02;
    text-transform: uppercase;
    margin: 0 0 0.9rem;
  }

  .role {
    font-family: var(--font-mono);
    font-size: clamp(0.8rem, 1.6vw, 0.95rem);
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin: 0 0 0.75rem;
  }

  .summary {
    max-width: 34rem;
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(232, 238, 244, 0.75);
    margin: 0 0 1.75rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .hero-img {
      animation: ${Spin} infinite 20s linear;
    }
  }

  @media screen and (min-width: 1180px) {
    &::before {
      background: url(${Dark}) top center fixed no-repeat;
      background-size: 100vw auto;
    }
  }

  @media screen and (min-width: 1367px) {
    &::before {
      background: url(${Dark}) center center fixed no-repeat;
      background-size: cover;
    }
  }
`;

export default function Hero() {
  const { name } = useSelector(selectData);

  return (
    <StyledHero>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7}>
            <p className="role">Backend · Systems · DevOps</p>
            <h1 className="name">{name}</h1>
            <p className="summary">
              I design, build, and operate backend services and the systems they
              run on — APIs, data pipelines, and the infrastructure behind them,
              from enterprise cloud to the factory floor.
            </p>
            <div className="d-flex align-items-center">
              <SocialLinks />
            </div>
          </Col>
          <Col md={5} className="d-none d-md-block">
            <img src={Logo} alt="" className="w-75 mx-auto hero-img" />
          </Col>
        </Row>
        <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"About"} className="link-icons">
              <FaChevronCircleDown />
            </Link>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
}
