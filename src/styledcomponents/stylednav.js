import styled, {css} from 'styled-components'

const Nav = styled.ul`
	color: white;
	width: 100%;
	height: 50px;
	display: flex;
	position: fixed;
	align-items: center;
	z-index: 1;
	padding:0;
	margin:0;
	background: yellow;
`;
const Tabs = styled.li`
	color:  ${props => props.theme.main};
	margin: 25px;
	padding: 10px;
	listStyleType: none;
	fontSize: 15px;
	font-weight: bold;
	cursor: pointer;
	list-style-type: none;
	&:hover{
		color: black;
	}
`;

export{
	Nav,Tabs
}