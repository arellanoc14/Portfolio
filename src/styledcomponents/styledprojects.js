import styled, {css} from 'styled-components';
const Section =  styled.section`
	padding: 25px;
	width: 100%;
	height: 100%;	
`;
const Grid = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
	    @media (max-width: 1000px) {
	  	  	 grid-template-rows: 1fr 1fr 1fr 1fr;
	   		 grid-template-columns: 1fr;
	   		 grid-gap: 1px;
	   		 padding: 0 auto;
	 	 }	 
	border: 10px solid black;
	border-radius: 20px;
`;
const Wapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	box-shadow: 0 0 10px black; 
`;
const ProjectContent = styled.div`
	width: 80%;
	height: 80%;
	position: absolute;
	color: black;
	display: flex;
	align-items: center;
	transform: scale(1.2);
	opacity: 0;
	transition: opacity ease-out 500ms;
		&:hover{
			opacity: 1;
		}

`;
const Icons = styled.div`
	width: 200px;
	height: 40px;
	display: flex;
	align-items: center;
	border-radius: 5px;
	padding: 10px;
	color: black;
	font-weight: bold;
		&:hover{
			border: 1px solid ${props => props.theme.border};
			color: ${props => props.theme.color};

		}
`
const Title = styled.h1`
	color:  ${props => props.theme.main};
	margin-bottom: 0;

`;
const Text = styled.p`
	fontWeight: bold;
	color: black;

`;
const Container = styled.div`
	width:100%;
	height: 100%;
	font-size: 25px;
	  	@media (max-width: 700px) {
	  		font-size: 17px;
	 	 }
`;
export {
	Section,
	Grid,
	Wapper,
	ProjectContent,
	Icons,
	Title,
	Text,
	Container
}