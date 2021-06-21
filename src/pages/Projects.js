import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectData from '../projectData.json';

function Projects() {
  return (
    <div className="container row justify-content-center">
      <h1 className="my-2 bg-light p-3 border border-dark">My projects</h1>
      {projectData.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
}

export default Projects;
