import React from 'react';
import contactInfo from '../../contactInfo.json';

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <ul class="contactList">
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
    </div>
  );
}

export default Contact;
