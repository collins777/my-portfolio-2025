import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.div`
  height: 180px;
  background-color: #e0e0e0;
  background-image: url("https://via.placeholder.com/600x400");
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #0077cc;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #555;
  margin-bottom: 1rem;
`;

const Tech = styled.p`
  font-size: 0.9rem;
  color: #999;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.a`
  padding: 0.5rem 1rem;
  background-color: #0077cc;
  color: white;
  font-size: 0.9rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005fa3;
  }
`;

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  imageUrl?: string;
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  imageUrl,
  githubLink,
  demoLink,
}) => (
  <Card>
    <Image
      style={{
        backgroundImage: `url(${
          imageUrl || "https://via.placeholder.com/600x400"
        })`,
      }}
    />
    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Tech>{tech}</Tech>
      <ButtonGroup>
        {githubLink && (
          <Button href={githubLink} target="_blank" rel="noopener noreferrer">
            Github
          </Button>
        )}
        {demoLink && (
          <Button href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </Button>
        )}
      </ButtonGroup>
    </Content>
  </Card>
);

export default ProjectCard;
