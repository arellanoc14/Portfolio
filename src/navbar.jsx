
import React from 'react';
import {Link} from 'react-scroll';
import {Nav,Tabs} from  './styledcomponents/stylednav';
const navArray = [
	{id:1, label: "Home", Link: 'sectionOne', colors: 'red'},
	{id:2, label: "Projects", Link: 'sectionTwo', colors: 'blue'},
	{id:3, label: "Contact", Link: 'sectionThree', colors: 'green'}
]
const Navbar = () => 
	<Nav>
		{navArray.map(nav => (
			<Link 
				spy = {true}
				smooth = {true}
				offest = {-70}
				duration = {500}
					to = {nav.Link}>
						<Tabs 
							theme = {{main:nav.colors}}
							key = {nav.id}>
								{nav.label}
						</Tabs>
			</Link>
		))}
	</Nav>
export default Navbar;
