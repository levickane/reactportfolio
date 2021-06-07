import React from 'react';
import projectData from '../../projectData.json';

function Projects() {
  return (
    <div className="row justify-content-center">
      <h1>My projects</h1>
      {projectData.map((project) => (
        <div
          className="card my-2 mx-2 border border-dark col-lg-5 col-md-5"
          key={project.id}
        >
          <h1 className="card-header">{project.title}</h1>
          <img
            src={project.image}
            className="card-img-top"
            alt={project.title}
          />
          <div className="card-body">
            <p className="card-text">
              <strong>Technologies used:</strong> {project.technologies}
            </p>
            <a
              data-bs-toggle="collapse"
              href={`#${project.id}`}
              aria-expanded="false"
              aria-controls={project.id}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <strong>Toggle Description...</strong>
            </a>
            <p className="collapse" id={project.id}>
              {project.description}
            </p>
            <br />
            <a
              href={project.link}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary mx-1 my-1"
            >
              Live Link
            </a>
            {project.githubLink ? (
              <a
                href={project.githubLink}
                rel="noreferrer"
                target="_blank"
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
