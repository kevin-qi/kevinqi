import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Container, Row , Col } from 'react-bootstrap';

import TopBar from '../../components/top-bar'
import './biography.css';

class Bio extends Component {
  render() {
    return(
      <Container>
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
        <Row>
        	<Col xs={7}>
        		<img fluid src = {require('../../imgs/profile.jpg')}/>
        	</Col>
        	<Col class="">
        		<h2 class='biography'>
        			Hello! <br />
        		</h2>
        		<p>
        			I'm Kevin. 
              <br /><br />
              I enjoy tackling challenging problems in Computer Science, Physics, and Biology.
              <br /><br />
              In my free time I like to cook, eat, and dance.
        		</p>
            <a href="https://www.linkedin.com/in/kevin-qi-23b856b5/"> Linkedin</a>
        	  <a href="https://github.com/kevin-qi"> Github</a>
            <a href="../imgs/Kevin_Qi_Resume.pdf" download> Resume</a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Bio;
