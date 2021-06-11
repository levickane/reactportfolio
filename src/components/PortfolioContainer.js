import React, { Component } from 'react';
import NavBar from './NavBar';
import Bio from '../pages/Bio';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Footer from './Footer';

class PortfolioContainer extends Component {
  state = {
    currentPage: 'Bio'
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      case 'Bio':
        return <Bio />;
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
        <div className="container my-4">{this.renderPage()}</div>
        <Footer />
      </div>
    );
  }
}

export default PortfolioContainer;
