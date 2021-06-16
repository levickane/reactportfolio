import React from 'react';

function NavTabs(props) {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url(./logos/LOGO.jpg)',
          width: '100%',
          height: '',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          fontFamily: 'sans-serif'
        }}
        className="d-flex justify-content-center pb-5 row-fluid"
      >
        <h1
          className="my-5 py-5  text-center rounded col-10"
          style={{
            backgroundColor: 'rgba(245, 245, 245, 0.4)',
            fontFamily: "'Sedgwick Ave', cursive",
            lineHeight: '150%'
          }}
        >
          <strong>Making Normal Software Abnormally Awesome</strong>
        </h1>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-light mt-n4"
        style={{ backgroundColor: 'rgb(202, 183, 118)' }}
      >
        <div className="container-fluid">
          <a
            href="#bio"
            onClick={() => props.handlePageChange('Bio')}
            className="nav-link text-dark"
          >
            Levi Kane | Full Stack Developer
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="#bio"
                  onClick={() => props.handlePageChange('Bio')}
                  className="nav-link text-dark"
                >
                  Bio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#projects"
                  onClick={() => props.handlePageChange('Projects')}
                  className="nav-link text-dark"
                >
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => props.handlePageChange('Contact')}
                  className="nav-link text-dark"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavTabs;
