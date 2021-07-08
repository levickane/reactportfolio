import React from 'react';

function ProjectCard(props) {
  const project = props.project;
  return (
    <div className="card gx-0 my-2 mx-2 border border-dark col-md-5">
      <div className="card-header">
        <h1>{project.title}</h1>
      </div>
      <div className="card-body">
        <img src={project.image} className="card-img-top" alt={project.title} />

        <p className="card-text">
          <span style={{ fontSize: '1.5em' }}>Technologies used:</span>{' '}
          {project.technologies}
        </p>
        <a
          data-bs-toggle="collapse"
          href={`#${project.id}`}
          aria-expanded="false"
          aria-controls={project.id}
          style={{
            textDecoration: 'none',
            color: 'black',
            fontSize: '1.5em'
          }}>
          <strong>Toggle Description...</strong>
        </a>
        <p className="collapse" id={project.id}>
          {project.description}
        </p>
      </div>
      <div className="card-footer">
        <a
          href={project.link}
          rel="noreferrer"
          target="_blank"
          className="btn btn-primary mx-1 my-1">
          Live Link
        </a>
        {project.githubLink ? (
          <a
            href={project.githubLink}
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary mx-1 my-1">
            My Github Repo
          </a>
        ) : (
          <button className="btn btn-secondary mx-1 d-none">
            Private Repo
          </button>
        )}
      </div>
    </div>
  );
}
export default ProjectCard;
