import styled, {css} from 'styled-components';
const Section =  styled.section`
	width: 100%;
	height: 500px	
`;
const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Contacts = styled.div`
	position: 'relative';
`;
const Info = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: start;
	width: 270px;
	padding: 10px;
	margin: 10px;
	cursor: pointer;
	border: 2px solid blue;
	border-radius: 30px;
	font-weight: bold;
	color: black;
	&:hover{
		color: ${props => props.theme.color};
		border: 2px solid ${props => props.theme.border};
	}
`;
export {Section,Container,Contacts,Info}