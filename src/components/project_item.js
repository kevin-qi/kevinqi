import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';

import './project_item.css'


class ProjectItem extends Component {
	render () {
		if(this.props.github_url == ""){
			return (
				<div>	
					<div>
						<img fluid
							src={require('../imgs/'+this.props.name+'.jpg')}
						/>
						<p id="overlay">{this.props.desc}</p>	
					</div>

					<h3 style={{textAlign: 'center'}}>
					{this.props.title}
					</h3>
				</div>
			);
		}
		return (
			<div>
				<a href={this.props.github_url} target = "_blank">
					<div class="overlay_wrapper">
							<img fluid
								src={require('../imgs/'+this.props.name+'.jpg')}
							/>
						<p id="overlay">{this.props.desc}</p>	
					</div>
				</a>

				<h3 style={{textAlign: 'center'}}>
				{this.props.title}
				</h3>
			</div>
		);
	}
}

export default ProjectItem