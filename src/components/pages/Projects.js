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
            <a
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              href={`#${project.title + 'a'}`}
              aria-expanded="false"
              aria-controls={project.title + 'a'}
            >
              Button with data-bs-target
            </a>
            <div className="collapse" id={project.title + 'a'}>
              <div className="card card-body">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
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
