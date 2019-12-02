import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import TopBar from '../../components/top-bar'
import ProjectItem from '../../components/project_item'
import './cookingpage.css';

class CookingPage extends Component {
  render() {
    return(
      <Container>
        <Row style={{paddingBottom: "55px"}}>
          <Col>
            <h1>Cooking</h1>
          </Col>
        </Row>

        <Row>
          <Col><ProjectItem 
                  name='sweet_sour_lotusroot' 
                  github_url=""
                  title='Sweet and Sour Lotus Root'
                  desc=''/>
          </Col>

          <Col><ProjectItem 
                  name='stuffed_bellpeppers' 
                  github_url=""
                  title='Stuffed Bell Peppers with Oyster Sauce'/>
          </Col>
        </Row>
        <Row><Col> <hr/> </Col></Row>

        <Row>
          <Col><ProjectItem 
                  name='miso_glazed_blackcod' 
                  github_url=""
                  title='Miso-glazed Black Cod'
                  desc=''/>
          </Col>

          <Col><ProjectItem 
                  name='mala_dry_pot' 
                  github_url=""
                  title='Mala Dry Hotpot'/>
          </Col>
        </Row>
        <Row><Col> <hr/> </Col></Row>

        <Row>
          <Col><ProjectItem 
                  name='bittermelon_salad' 
                  github_url=""
                  title='Bittermelon Salad'
                  desc=''/>
          </Col>

          <Col><ProjectItem 
                  name='sichuan_cold_noodles' 
                  github_url=""
                  title='Sichuan Cold Noodles'/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CookingPage;
