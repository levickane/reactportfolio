import React from 'react';

function NavTabs(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid">
        <a
          href="/"
          onClick={() => props.handlePageChange('Bio')}
          className="nav-link text-light"
        >
          Levi Kane | Full Stack Developer
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
