import React from "react";
import styled from "styled-components";
// Icons
import { FaGithub, FaRegStar, FaCodeBranch } from "react-icons/fa";

// GitHub's own language colours for the languages in this profile.
const LANGUAGE_COLORS = {
  Python: "#3572A5",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  Scheme: "#1e4aec",
  "Jupyter Notebook": "#DA5B0B",
  "OpenEdge ABL": "#5ce600",
};

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.25rem;
  border: 1px solid var(--line);
  border-radius: 0.75rem;
  background: var(--surface);
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover,
  &:focus-within {
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  .repo-name {
    font-family: var(--font-mono);
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0 0 0.6rem;
    overflow-wrap: anywhere;
  }

  .repo-description {
    font-size: 0.85rem;
    line-height: 1.5;
    color: rgba(232, 238, 244, 0.78);
    margin: 0 0 1rem;
    flex: 1 1 auto;
    overflow: hidden;
  }

  .repo-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.9rem;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--muted);
    margin-bottom: 0.9rem;
  }

  .repo-meta span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .language-dot {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    display: inline-block;
    flex: 0 0 auto;
  }

  .repo-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    text-decoration: none;
    color: var(--accent);
    margin-top: auto;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function formatUpdated(value) {
  if (!value) return null;
  return new Date(value).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });
}

export default function StyledCard({
  name,
  description,
  url,
  language,
  stars,
  forks,
  updatedAt,
}) {
  const updated = formatUpdated(updatedAt);

  return (
    <StyledArticle>
      <h3 className="repo-name">{name}</h3>
      <p className="repo-description">
        {description || "No description provided."}
      </p>
      <div className="repo-meta">
        {language && (
          <span>
            <i
              className="language-dot"
              style={{
                background: LANGUAGE_COLORS[language] || "#8b949e",
              }}
            />
            {language}
          </span>
        )}
        {stars > 0 && (
          <span>
            <FaRegStar />
            {stars}
          </span>
        )}
        {forks > 0 && (
          <span>
            <FaCodeBranch />
            {forks}
          </span>
        )}
        {updated && <span>Updated {updated}</span>}
      </div>
      {url && (
        <a
          className="repo-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          View on GitHub
        </a>
      )}
    </StyledArticle>
  );
}
