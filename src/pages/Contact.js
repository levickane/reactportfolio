import React from 'react';
import contactInfo from '../contactInfo.json';

function Contact() {
  return (
    <div className="card bg-light">
      <h1 className="card-header pt-3">Contact Info</h1>
      <div className="card-body">
        <ul className="list-unstyled">
          <li>
            <h5>
              <i className="bi bi-envelope-fill"> </i>
              <a href="mailto:oneleggedlevi09@gmail.com">
                oneleggedlevi09@gmail.com
              </a>
            </h5>
          </li>
          <li>
            <h5>
              <i className="bi bi-telephone-fill"> </i>
              <a href={contactInfo.phone}>773-558-3112</a>
            </h5>
          </li>
          <li>
            <h5>
              <i className="bi bi-github"> </i>
              <a
                href={contactInfo.githubProfile}
                rel="noreferrer"
                target="_blank">
                github.com/levickane
              </a>
            </h5>
          </li>
          <li>
            <h5>
              <i className="bi bi-linkedin"> </i>
              <a href={contactInfo.linkedIn} rel="noreferrer" target="_blank">
                LinkedIn
              </a>
            </h5>
          </li>
        </ul>
        <h2>Resume</h2>
        <h5>
          <a
            href="./downloadable/RESUME.pdf"
            download="Levi_Kane_FullStack_Resume"
            target="_blank">
            Click here for a downloadable pdf of my resume
            <i className="material-icons">description</i>
          </a>
        </h5>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <h3>Response times range from 0-30 minutes</h3>
      </div>
    </div>
  );
}

export default Contact;
