import styled, {css} from 'styled-components'
const Section = styled.div`
	width: 100%;
	height: 1000px;
	background-image: url('https://images.unsplash.com/photo-1417577097439-425fb7dec05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

`;
const Wapper = styled.div`
	width: 200px;
	height: 200px;
	padding: 30px;
	margin: 20px;
	display: flex;
	top: 90%;
	left: 50%;
	transform: translate(-50%,-50%);
	position: absolute;	
`;
export{Section,Wapper}