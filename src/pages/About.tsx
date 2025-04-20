import React from "react";
import styled from "styled-components";
import AboutIllustration from "../assets/svg/About me-pana.svg";

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: #fff;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    padding: 3rem 1rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #0077cc;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
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
    }
  }
`;

const About: React.FC = () => {
  console.log("About component rendered "); // console log to check if component is rendered
  return (
    <AboutSection id="about">
      <IllustrationWrap>
        <img src={AboutIllustration} alt="Coding illustration" />
      </IllustrationWrap>
      <TextContent>
        <Heading>About Me</Heading>
        <Paragraph>
          Hi, I’m Brandon — a tech enthusiast who loves books, building custom
          PCs, keyboards, and writing code. I’m currently earning my Bachelor’s
          in Information Technology with a Business Administration minor at
          Wayne State University. I also hold an Associate degree in IT from
          Macomb Community College and a Web Development certificate. When I’m
          not coding or studying, you’ll probably find me deep in a good book or
          fine-tuning a mechanical keyboard. I’m always curious, always
          building, and always learning.
        </Paragraph>
      </TextContent>
    </AboutSection>
  );
};

export default About;
