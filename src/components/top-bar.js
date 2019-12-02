import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar , Nav } from 'react-bootstrap';

import "./top-bar.css"

class TopBar extends Component {
	render () {
		return (
			<nav class="navbar">
				<p> KEVIN QI </p>
				<ul class="nav-links">
					<li class="nav-item">
						<a onClick= {
							() => {this.props.scrollToRef(this.props.bioRef)}}>
							About Me
						</a>
					</li>

					<li class="nav-item">
						<a onClick={
							() => {this.props.scrollToRef(this.props.projectsRef)}}>
		        			Projects
			        	</a>
					</li>

					<li class="nav-item">
						<a onClick={
							() => {this.props.scrollToRef(this.props.cookingRef)}}>
				        	Cooking
			        	</a>
					</li>
				</ul>
	      	</nav>
		);
	}
}

export default TopBar