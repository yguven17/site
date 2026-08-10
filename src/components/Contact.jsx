import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import ContactForm from "./ContactForm";

const StyledSection = styled.section`
  .intro {
    max-width: var(--measure);
    font-size: 1.02rem;
    line-height: 1.7;
    color: rgba(232, 238, 244, 0.8);
    margin-bottom: 2.25rem;
  }
`;

export default function Contact() {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="section">
        <Container>
          <Title>
            <h2>Contact</h2>
            <div className="underline"></div>
          </Title>
          <p className="intro">
            Open to backend roles and collaboration. Send a message and I will
            get back to you.
          </p>
          <ContactForm />
        </Container>
      </StyledSection>
    </Element>
  );
}
