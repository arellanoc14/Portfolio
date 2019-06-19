import React, { Component, PropTypes } from 'react';
import IoSocialGithub from 'react-icons/lib/io/social-github';
import FaFileWordO from 'react-icons/lib/fa/file-word-o';
import FaGoogle from 'react-icons/lib/fa/google';
import {Section,Container,Contacts,Info} from '../styledcomponents/styledcontact';
import { Link } from "react-router-dom";
class SectionThree extends Component {	
    render() {
	const icon = {
		width: '40px',
		height: '40px',
		color: 'black'
	}
        return (
            <Section id = 'sectionThree'>
           	    <Container>
           	    	<Contacts>
           	    		<Link to = '/resume'>
					        <Info theme = {{
					           	   	color: 'aqua',
					           	   	border: 'aqua'
					           	   }} id = 'resume'>
						           	 <FaFileWordO style = {icon}/>
						           	  	Resume
					        </Info>
				        </Link>
				        <a href = 'https://github.com/arellanoc14?tab=repositories'>
				        <Info theme = {{
				           	   	color: 'tomato',
				           	   	border: 'tomato'
				           	   }} id = 'github'>
					           	  	<IoSocialGithub style = {icon} />
					           	    My Github
				        </Info> 
				        </a>
				        <Info theme = {{
				           	   		color: 'lime',
				           	   		border: 'lime'
				           	   }} id = 'resume'>
					           	  	<FaGoogle style = {icon} />
					           	  	 chrisarellano14@gmail.com
				        </Info>
			        </Contacts>
		        </Container> 
            </Section>
        );
    }
}

export default SectionThree;
