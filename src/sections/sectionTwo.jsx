import React from 'react';
import {Section,Grid} from '../styledcomponents/styledprojects';
import ecom from './E-com.png';
import CupCake from './CupCake.png';
import yelp from './yelp.png';
import bbc from './bbc.png';
import Projects from './projects';
const projectsArray = [
	{projects: ecom, projectTitle: 'Ecommerce Website', githubLink: 'https://github.com/arellanoc14/Project-ecom', productsLinks: 'https://5d01cd1c79ad332766a2c89a--frosty-payne-4b17b2.netlify.com' , color: 'red'},
	{projects: yelp, projectTitle: 'Yelp API', githubLink: 'https://github.com/arellanoc14/yelp-api', productsLinks: 'https://5d096638c18cff017b993cd2--yelpapi.netlify.com', color: 'green'},
	{projects: CupCake, projectTitle: 'Cup Cake Factory', githubLink: 'https://github.com/arellanoc14/cupcake-factory', productsLinks: 'https://5d0979237520b533d25d6ebc--relaxed-pike-612485.netlify.com', color: 'lime'},
	{projects: bbc, projectTitle: 'BCC News Clone', githubLink: 'https://github.com/arellanoc14/BCC-News-Clone', productsLinks: 'https://5d097876a531a281cabe36e1--bbc-clone.netlify.com', color: 'red'}
]
const SectionTwo = () => 
<Section id = 'sectionTwo'>       
    <Grid>
        {
            projectsArray.map(p => (
                <Projects
                    colors = {p.color}
                    img = {p.projects}
                    projectTitle = {p.projectTitle}
                    text = {p.text}
                    githubLink = {p.githubLink}
                    projectLink = {p.productsLinks}/>
            ))
        }
    </Grid>
</Section>
export default SectionTwo;
