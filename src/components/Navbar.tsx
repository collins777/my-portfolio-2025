import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0077cc;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #0077cc;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
`;

// Scroll to a specific section on click
const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string
) => {
  e.preventDefault(); // prevent default link behavior
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo className="logo">Hello.</Logo>
      <NavLinks>
        <a href="#home" onClick={(e) => handleScroll(e, "home")}>
          Home
        </a>
        <a href="#about" onClick={(e) => handleScroll(e, "about")}>
          About
        </a>
        <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
          Projects
        </a>
        <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
          Contact
        </a>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
