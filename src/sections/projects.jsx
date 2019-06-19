import React, { Component } from 'react';
import {Container,Wapper,ProjectContent,Icons,Title,Text} from '../styledcomponents/styledprojects'
import IoSocialGithub from 'react-icons/lib/io/social-github';
import GoLightBulb from 'react-icons/lib/go/light-bulb';
class Project extends Component {
	state = {
		opacity: false
	}

cards = () =>{
	this.setState({
		opacity: !this.state.opacity,
	})
}
render() {
const reactIcon = {
	width: '50px',
	height: '50px',
	color:  'black'
}
const card = {
	width: '100%',
	maxWidth: '100%',
	maxHeight: '500px',
	display: 'block',
	transition: 'opacity ease-out 250ms',
	opacity: this.state.opacity ? '.2' : '1'
}
const {img,projectTitle,text,colors,githubLink,projectLink} = this.props;
     	   return (
			 	<Wapper onMouseEnter = {this.cards}
			 		 onMouseLeave = {this.cards}>
			    	 	<img src = {img} style = {card}/>
			   		<ProjectContent>
						<Container>
							<a href = {githubLink}>
								<Icons theme = {{border: 'blue',color: 'red'}}><IoSocialGithub style = {reactIcon} /> Go to GitHub</Icons>
							</a>
							<a href = {projectLink}>
								<Icons theme = {{border: 'green',color: 'red'}}><GoLightBulb style = {reactIcon} />Go to Project</Icons>
							</a>
							<Title theme = {{main:colors}}>{projectTitle}</Title>
						</Container>
					</ProjectContent>
				</Wapper> 
        );
    }
}

export default Project;

