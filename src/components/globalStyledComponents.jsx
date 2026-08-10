import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll/modules";
// Icons
import { FaChevronCircleUp } from "react-icons/fa";

// Animations
export const Spin = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const spinner = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

// Loading Spinner
export const Loading = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 5px solid;
  border-radius: 50%;
  border-top-color: var(--accent);
  margin: 1rem auto;
  animation: ${spinner} 0.6s linear infinite;
`;

// Spacer for fixed Navigation bar
export const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;

/* Section heading: a mono marker and a hairline rule that runs the full width,
   so headings read like panel labels rather than decorated titles. */
export const Title = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;

  h2 {
    display: flex;
    align-items: baseline;
    gap: 0.9rem;
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0;
  }

  h2::before {
    content: "";
    flex: 0 0 auto;
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    background: var(--accent);
    transform: translateY(-0.2em);
  }

  .underline {
    height: 1px;
    width: 100%;
    margin-top: 1rem;
    background: var(--line);
  }
`;

// Back to top link
const StyledDiv = styled.div`
  position: fixed;
  bottom: calc(var(--min-footer-height) + 1.5rem);
  right: 1.5rem;
  visibility: hidden;

  .link-icons {
    color: var(--text);
  }

  &.show-up {
    visibility: visible;
  }
`;

export function BackToTop({ home }) {
  const up = React.useRef(null);

  React.useEffect(function () {
    function updateScrollY() {
      up.current?.classList.toggle("show-up", window.scrollY > 500);
    }

    updateScrollY();
    window.addEventListener("scroll", updateScrollY);

    return () => window.removeEventListener("scroll", updateScrollY);
  }, []);

  return (
    <StyledDiv ref={up}>
      <Link to={home} className="link-icons">
        <FaChevronCircleUp />
      </Link>
    </StyledDiv>
  );
}
