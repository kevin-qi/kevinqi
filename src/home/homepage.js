import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './homepage.css';

class HomePage extends Component {
  render() {
    return(
      <div>
        <div>
          <h1>Home page</h1>
        </div>

        <div>
          <nav style={{ margin: 10 }}>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>

            <NavLink to='/projects' exact activeClassName='active'>
              Projects
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default HomePage;
