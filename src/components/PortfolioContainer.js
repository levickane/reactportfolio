import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

class PortfolioContainer extends Component {
  state = {
    currentPage: 'Home'
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      case 'Bio':
        return <Bio />;
      case 'Home':
        return <Home />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <NavBar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <div className="container">{this.renderPage()}</div>
      </div>
    );
  }
}

export default PortfolioContainer;
