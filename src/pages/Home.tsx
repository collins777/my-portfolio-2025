import React from "react";
import styled from "styled-components";
import Illustration from "../assets/svg/Pair programming-amico.svg";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const HomeContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  height: 100vh;
  background-color: #f9f9f9;
  max-width: 1200px; // limit width
  margin: 0 auto; // center the container in viewport

  @media (max-width: 768px) {
    flex-direction: column; // mobile
    text-align: center;
    margin-top: 12.5rem;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center; // vertical centering
  height: 100%; // needed for vertical centering
  padding-right: 2rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #0077cc;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #444;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CTAButton = styled.a`
  padding: 0.75rem 2rem;
  background-color: #0077cc;
  color: white;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #005fa3;
  }
`;

const IllustrationWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 450px;

    @media (max-width: 768px) {
      max-width: 300px;
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer id="home">
        <Content>
          <Title>Hello, I'm Brandon</Title>
          <Subtitle>I'm a full-stack software engineer</Subtitle>
          <Description>
            I design and build scalable web applications using React,
            TypeScript, and modern technologies. I focus on writing clean,
            maintainable code and delivering seamless user experiences.
          </Description>
          <ButtonGroup>
            <CTAButton href="#projects">View My Work</CTAButton>
            <CTAButton
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </CTAButton>
          </ButtonGroup>
        </Content>
        <IllustrationWrap>
          <img src={Illustration} alt="Pair programming" />
        </IllustrationWrap>
      </HomeContainer>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
