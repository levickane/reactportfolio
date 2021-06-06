import React from 'react';
import projectData from '../../projectData.json';

function Projects() {
  return (
    <div>
      <h1>My projects</h1>
      {projectData.map((project) => (
        <div className="card" key={project.id}>
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.subtitle}</p>
            {/* <a href= className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
