import React from 'react';
import IoSocialHtml5 from 'react-icons/lib/io/social-html5';
import IoSocialCss3 from 'react-icons/lib/io/social-css3';
import IoSocialJavascript from 'react-icons/lib/io/social-javascript';
import {Section,Wapper} from '../styledcomponents/styledheader'
import IntroTween from './IntroTween';
import Navbar from '../navbar';
const sectionOne = () => 
	<Section id = 'sectionOne'>
		<Navbar />
		<IntroTween />
		<div style = {{width: '100px', height: '100px',position: 'absolute',top:'90%',left:'40%',transform: 'translate(-50%,-50%)',display:'flex',padding:'50px'}}>
			<img src = 'https://www.shareicon.net/download/2017/01/17/871991_document_512x512.png'  style = {{width: '100%', height: '100%'}} />
			<img src = 'https://cdn3.iconfinder.com/data/icons/programming/100/css_3-512.png'  style = {{width: '100%', height: '100%'}} />
			<img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTlw2tA-JUXzIzVD0TErgk3CXbYVgPyiFwUqVGPCd6XYid4DJV'  style = {{width: '100%', height: '100%'}} />
			<img src = 'https://png.pngtree.com/svg/20170427/react_1353127.png'  style = {{width: '100%', height: '100%'}} />
		</div>
	</Section>
export default sectionOne;