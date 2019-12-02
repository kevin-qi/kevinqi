import React, { Component, useRef } from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col, Button , Container } from 'react-bootstrap';

import TopBar from './components/top-bar'

import Bio from './pages/profile/biography'
import ProjectsPage from './pages/projects/projectspage.js'
import CookingPage from './pages/cooking/cookingpage.js'

import './homepage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.bioRef = React.createRef();
    this.projectsRef = React.createRef();
    this.cookingRef = React.createRef();

    this.scrollToRef = (ref) => {
      ref.current.scrollIntoView({behavior: 'smooth'})
    };
  }

  render() {
    return(
      <div>
        <TopBar bioRef={this.bioRef}
                projectsRef={this.projectsRef}
                cookingRef={this.cookingRef}
                scrollToRef={this.scrollToRef}
                
        />
        <Container class="page-content">
          <Row id="bio" ref = {this.bioRef}>
            <Col> <Bio /> </Col>
          </Row>
          <Row id="projects" ref={this.projectsRef}> 
            <Col> <ProjectsPage /> </Col>
          </Row>
          <Row id="cooking" ref={this.cookingRef}>
            <Col> <CookingPage /> </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
