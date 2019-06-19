import React from 'react';
import { Link } from "react-router-dom";
const Resume = () => {
  return (
    <div style = {{width: '100%', height: '100%'}}>
  		<div style = {{
  			width: '80%', height: '100%',
  			position: 'absolute', top: '50%',
  			left: '50%', transform: 'translate(-50%,-50%)',
  			padding: '10px'

  		}}>
	  		 <div>
	  		 	<h1 style = {{color: 'blue'}}>Christian Arellano</h1>
	  		 	<span>Frontend Developer</span>
	  		 </div>
	  		 <h2 style = {{color: 'blue'}}>Summary</h2>
	  		 <div style = {{width: '500px', height: '60px'}}>
		  		 <p>
		  			 I'm a Jr Front-end developer 
			  		 with hands on experience working 
			  		 with modern technologies. I'm a problem 
			  		 solver, and I have a big passion for 
			  		 technology and innovation. I am JavaScript focused, love working with a team.
		  		 </p>
		  	 </div>
	  		 <h2 style = {{color: 'blue'}}>Experience</h2>
	  		 <span>Chevron, Lake Elsinore — Cashier</span>
	  		 <div style = {{width: '500px', height: '60px'}}>
		  		 <p>
					maintain the station, attending to and assisting 
					customers, accepting payments, stocking the shelves and maintaining station organization, 
					preparing any hot food and maintaining the balance of the cash drawer.
		  		 </p>
		  	</div>
		  	<div>
		  		<h2 style = {{color: 'blue'}}>Skills</h2>
		  		<ul>
		  			<li>HTML</li>
		  			<li>CSS</li>
		  			<li>JavaScript</li>
		  			<li>React</li>
		  		</ul>
		  	</div>
	  		 <h2 style = {{color: 'blue'}}>Education</h2>
	  		 <ul>
	  		 	<li>
	  		 		<h5>Norco College</h5>
	  		 		<span>Computer Science</span>
	  		 		<p>
		  		 		Year 2016 - Year 2018
						Classes of HTML, CSS, JavaScript
					</p>
	  		 	</li> 
	  		 	<li>
	  		 		<h5>Code Academy</h5>
	  		 		<span>Web Development</span>
	  		 		<p>
						Courses of HTML, CSS,  JavaScript, React JS
					</p>
	  		 	</li> 
	  		 	<li>
	  		 		<h5>Free Code Camp</h5>
	  		 		<span>Frontend Libraries</span>
	  		 		<p>
						JavaScript Algorithms and Data Structures
					</p>
	  		 	</li> 	
	  		 </ul>
	  		<Link to = '/'><button style = {{color:'red'}}>Back To Home</button></Link>
	  	</div>
    </div>
  )
}

export default Resume;