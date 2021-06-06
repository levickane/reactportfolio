import React from 'react';

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs bg-primary ">
      <li className="nav-item">
        <a
          href="/"
          onClick={() => props.handlePageChange('Bio')}
          className="nav-link text-light"
        >
          Levi Kane | Full Stack Developer
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#bio"
          onClick={() => props.handlePageChange('Bio')}
          className="nav-link text-light"
        >
          Bio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => props.handlePageChange('Projects')}
          className="nav-link text-light"
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange('Contact')}
          className="nav-link text-light"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
