import React from "react";
import { useAppContext } from "../appContext";
import { Link, useLocation } from "react-router-dom";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";
import { FixedNavSpacer } from "./globalStyledComponents";
// Images
import Logo from "../images/logo.svg";

export default function SecondaryNavBar() {
  const { pathname } = useLocation();
  const { isExpanded, toggleExpanded } = useAppContext();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt="React Logo"
              src={Logo}
              width="35"
              height="35"
              className="bg-light rounded-circle"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              <Nav.Item>
                <Link
                  to="/"
                  className={pathname === "/" ? "nav-link active" : "nav-link"}
                  onClick={toggleExpanded}
                >
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/All-Projects"
                  className={
                    pathname === "/All-Projects"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={toggleExpanded}
                >
                  All Projects
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
