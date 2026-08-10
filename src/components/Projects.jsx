import React from "react";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import styled from "styled-components";
// Data
import { extraProjects, filteredProjects } from "../data";
// Icons
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Components
import { Button, Container } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";

const CARD_WIDTH = "17rem";

const StyledSection = styled.section`
  .container {
    min-width: 0;
  }

  .carousel-viewport {
    position: relative;
    min-width: 0;
  }

  .scroller {
    min-width: 0;
    display: flex;
    gap: 1.25rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    padding: 0.5rem 0.25rem 1.5rem;
    scrollbar-width: thin;
    scrollbar-color: var(--primary-dark) transparent;
  }

  .scroller::-webkit-scrollbar {
    height: 0.5rem;
  }

  .scroller::-webkit-scrollbar-thumb {
    background: var(--primary-dark);
    border-radius: 0.25rem;
  }

  .scroll-item {
    flex: 0 0 ${CARD_WIDTH};
    max-width: ${CARD_WIDTH};
    scroll-snap-align: start;
    /* Equal-height cards without locking content into a fixed box */
    display: flex;
  }

  .arrow {
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    border: var(--border);
    background: rgba(39, 39, 42, 0.85);
    color: #fbfdff;
    transition: var(--transition);
  }

  .arrow:hover {
    color: var(--primary);
  }

  .arrow:disabled {
    opacity: 0.25;
    cursor: default;
  }

  .arrow.left {
    left: -1rem;
  }

  .arrow.right {
    right: -1rem;
  }

  @media screen and (min-width: 800px) {
    .arrow {
      display: flex;
    }
  }
`;

export default function Projects() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);
  const scroller = React.useRef(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  // Featured repos first, then everything else, with the non-GitHub work up front.
  const projects = React.useMemo(
    function () {
      const featured = data.filter((repo) => filteredProjects.includes(repo.name));
      const rest = data.filter((repo) => !filteredProjects.includes(repo.name));
      return [...extraProjects, ...featured, ...rest];
    },
    [data]
  );

  const updateArrows = React.useCallback(function () {
    const el = scroller.current;
    if (!el) return;
    // The scroller's own padding offsets scrollLeft slightly, so allow slack.
    const slack = 8;
    setAtStart(el.scrollLeft <= slack);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - slack);
  }, []);

  React.useEffect(
    function () {
      updateArrows();
      window.addEventListener("resize", updateArrows);
      return () => window.removeEventListener("resize", updateArrows);
    },
    [updateArrows, projects.length]
  );

  function scrollBy(direction) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <Element name={"Projects"} id="projects">
      <StyledSection className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {isLoading && (
            <Container className="d-flex">
              <Loading />
            </Container>
          )}
          {error && <h2 className="text-center">{error}</h2>}
          {!error && !isLoading && projects.length === 0 && (
            <h2 className="text-center">
              Oops, you do not have any GitHub projects yet...
            </h2>
          )}
          {projects.length !== 0 && (
            <>
              <div className="carousel-viewport">
                <button
                  type="button"
                  className="arrow left"
                  aria-label="Scroll projects left"
                  onClick={() => scrollBy(-1)}
                  disabled={atStart}
                >
                  <FaChevronLeft />
                </button>
                <div
                  className="scroller"
                  ref={scroller}
                  onScroll={updateArrows}
                >
                  {projects.map(function (repo) {
                    return (
                      <div className="scroll-item" key={repo.id}>
                        <StyledCard
                          name={repo.name}
                          description={repo.description}
                          url={repo.html_url}
                          language={repo.language}
                          stars={repo.stargazers_count}
                          forks={repo.forks_count}
                          updatedAt={repo.pushed_at}
                        />
                      </div>
                    );
                  })}
                </div>
                <button
                  type="button"
                  className="arrow right"
                  aria-label="Scroll projects right"
                  onClick={() => scrollBy(1)}
                  disabled={atEnd}
                >
                  <FaChevronRight />
                </button>
              </div>
              {data.length > 3 && (
                <Container className="text-center mt-4">
                  <Link to="/All-Projects">
                    <Button size="lg" variant="outline-light">
                      All <FaGithub /> Projects
                    </Button>
                  </Link>
                </Container>
              )}
            </>
          )}
        </Container>
      </StyledSection>
    </Element>
  );
}
