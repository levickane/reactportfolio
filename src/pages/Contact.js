import React from 'react';
import contactInfo from '../contactInfo.json';

function Contact() {
  return (
    <div className=" card bg-light">
      <h1 className="card-header pt-3">Contact Info</h1>
      <div className="card-body">
        <ul className="list-unstyled">
          <li>
            <i class="bi bi-envelope-fill"> </i>
            <a href="mailto:oneleggedlevi09@gmail.com">
              oneleggedlevi09@gmail.com
            </a>
          </li>
          <li>
            <i class="bi bi-telephone-fill"> </i>
            <a href={contactInfo.phone}>773-558-3112</a>
          </li>
          <li>
            <i class="bi bi-github"> </i>
            <a
              href={contactInfo.githubProfile}
              rel="noreferrer"
              target="_blank"
            >
              github.com/levickane
            </a>
          </li>
          <li>
            <i class="bi bi-linkedin"> </i>
            <a href={contactInfo.linkedIn} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
        <h2 className="sectionTitle">Resume</h2>
        <div className="sectionContainer">
          <a
            href="./downloadable/RESUME.pdf"
            download="Levi_Kane_FullStack_Resume"
            target="_blank"
          >
            Click here for a downloadable pdf of my resume
            <i className="material-icons">description</i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
