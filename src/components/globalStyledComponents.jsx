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
  border-top-color: var(--primary);
  margin: 1rem auto;
  animation: ${spinner} 0.6s linear infinite;
`;

// Spacer for fixed Navigation bar
export const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;

// Titles
export const Title = styled.div`
  display: inline-block;
  margin: 0 auto;
  font-family: "Permanent Marker";
  text-align: center;

  .underline {
    height: 0.25rem;
    width: 75%;
    min-width: 3rem;
    border-radius: 0.25rem;
    margin: 0 auto 1.5rem auto;
    background: linear-gradient(
      to right,
      var(--primary-dark),
      var(--primary-light)
    );
  }
`;

// Back to top link
const StyledDiv = styled.div`
  position: fixed;
  bottom: calc(var(--min-footer-height) + 1.5rem);
  right: 1.5rem;
  visibility: hidden;

  .link-icons {
    color: #ebecf0;
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
