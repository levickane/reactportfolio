import React from 'react';
import contactInfo from '../../contactInfo.json';

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <ul>
        <li>
          <a href="mailto:oneleggedlevi09@gmail.com">
            oneleggedlevi09@gmail.com
          </a>
        </li>
        <li>
          <a href={contactInfo.phone}>773-558-3112</a>
        </li>
        <li>
          <a href={contactInfo.githubProfile} rel="noreferrer" target="_blank">
            github.com/levickane
          </a>
        </li>
        <li>
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
  );
}

export default Contact;
