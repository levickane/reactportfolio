import React from 'react';
import projectData from '../../projectData.json';

function Projects() {
  return (
    <div className="row justify-content-center">
      <h1>My projects</h1>
      {projectData.map((project) => (
        <div
          className="card my-2 mx-3 border border-dark col-lg-3 col-md-5"
          key={project.id}
        >
          <img
            src={project.image}
            className="card-img-top"
            alt={project.title}
          />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">
              <strong>Technologies used:</strong> {project.technologies}
            </p>
            <p>
              <strong>Description:</strong> {project.description}
            </p>
            <a href={project.link} className="btn btn-primary mx-1 my-1">
              Live Link
            </a>
            {project.githubLink ? (
              <a
                href={project.githubLink}
                className="btn btn-primary mx-1 my-1"
              >
                My Github Repo
              </a>
            ) : (
              <button className="btn btn-secondary mx-1 d-none">
                Private Repo
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
