import React, { Component } from 'react';
import SectionOne from './sections/sectionOne';
import SectionTwo from './sections/sectionTwo';
import SectionThree from './sections/sectionThree';
class Home extends Component {
 
    render() {
        return (
          <div style = {{
          	width: '100%', 
          	height: '100%',
          }}>
    			<SectionOne />
    			<SectionTwo />
    			<SectionThree />
  		  </div>
        );
    }
}

export default Home;
;