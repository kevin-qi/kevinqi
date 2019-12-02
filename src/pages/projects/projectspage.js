import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import TopBar from '../../components/top-bar'
import ProjectItem from '../../components/project_item'
import './projectspage.css';

class ProjectsPage extends Component {
  render() {
    return(
      <Container>
        <Row style={{paddingBottom: "55px"}}>
          <Col>
            <h1>Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col><ProjectItem 
                  name='ProteinRank' 
                  github_url="https://github.com/kevin-qi/LTR-proteins"
                  title='Navigating a 4D Fitness Landscape with Machine Learning'
                  desc=''/>
          </Col>

          <Col><ProjectItem 
                  name='mancini' 
                  github_url="https://docs.google.com/presentation/d/e/2PACX-1vQf9fMZ5mBDsmBl--rd97md5Gj7gD2TWDvIM36X618LtHR7ZOeMBvjrWjJZ9-aT4o8Z9tJ0RgsvuL7j/pub?start=false&loop=false&delayms=3000&slide=id.g379c3c8ab5_0_15"
                  title='Single Cell Trapping on Agarose'/>
          </Col>
        </Row>
        <Row> <Col> <hr/> </Col></Row>
        <Row>
          <Col><ProjectItem 
                  name='test' 
                  github_url="https://github.com/kevin-qi/leggo-calhacks"
                  title='DrinksTracking App'/>
          </Col>

          <Col><ProjectItem 
                  name='pdms_microscope' 
                  github_url=""
                  title='5-cent PDMS Microscope'/>
          </Col>
        </Row>
        <Row> <Col> <hr/> </Col></Row>

        <Row>
          <Col><ProjectItem 
                  name='CVD_graphene' 
                  github_url=""
                  title='CVD Large Single Crystal Graphene'/>
          </Col>

          <Col><ProjectItem 
                  name='graphene_transfer' 
                  github_url=""
                  title='Atomically-Clean Graphene Wet Transfer'/>
          </Col>
        </Row>
        <Row> <Col> <hr/> </Col></Row>
        <Row>
          <Col><ProjectItem 
                  name='qPlus_sensor' 
                  github_url=""
                  title='High-Q qPlus Sensors'/>
          </Col>

          <Col><ProjectItem 
                  name='labview' 
                  github_url="https://github.com/kevin-qi/QPlus-AFM-Tip-Analysis"
                  title='qPlus Sensor Measurement Software'/>
          </Col>
        </Row>        
      </Container>
    );
  }
}

export default ProjectsPage;
