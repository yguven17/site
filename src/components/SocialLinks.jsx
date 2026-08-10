import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog, blogUrl, githubUrl } from "../data";
// Icons
import { FaGithub } from "react-icons/fa";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        href={html_url || githubUrl}
        aria-label="Check out my GitHub profile."
        className="link-icons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      {(blog || blogUrl) && (
        <a
          href={blog || blogUrl}
          aria-label="External link"
          className="link-icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          {Blog}
        </a>
      )}
    </StyledSocialLinks>
  );
}
