import React from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background-color: #f4faff;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #0077cc;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>Projects</SectionTitle>
      <Grid>
        <ProjectCard
          title="My Portfolio"
          description="A responsive developer portfolio built with React and TypeScript."
          tech="React, TypeScript, Styled Components"
          imageUrl="https://via.placeholder.com/600x400"
          githubLink="https://github.com/yourusername/portfolio"
          demoLink="https://yourportfolio.live"
        />
        <ProjectCard
          title="Task Tracker"
          description="A simple task management app with drag-and-drop functionality."
          tech="React, Zustand, Tailwind CSS"
          imageUrl="https://via.placeholder.com/600x400"
          githubLink="https://github.com/yourusername/portfolio"
          demoLink="https://yourportfolio.live"
        />
        <ProjectCard
          title="Weather App"
          description="Weather data fetched from OpenWeatherMap API."
          tech="React, Axios, CSS Modules"
          imageUrl="https://via.placeholder.com/600x400"
          githubLink="https://github.com/yourusername/portfolio"
          demoLink="https://yourportfolio.live"
        />
      </Grid>
    </ProjectsSection>
  );
};

export default Projects;
