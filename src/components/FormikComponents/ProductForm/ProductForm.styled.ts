import styled from "styled-components";
import { Form } from "formik";

export const StyledWrapepr = styled.div`
	height: 93.45vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
`;
export const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	h2 {
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 30px;
	}
`;
export const StyledButtonBackToList = styled.button`
	border: none;
	background-color: #ffd369;
	border-radius: 5px;
	width: auto;
	height: 70px;
	padding: 0 10px;
	text-transform: uppercase;
	color: white;
	font-size: 19px;
	&:hover {
		cursor: pointer;
	}
	position: absolute;
	top: 20px;
	left: 20px;
`;
export const StyledForm = styled(Form)`
	width: 600px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
export const StyledSubmitButton = styled.button`
	border: none;
	text-transform: uppercase;
	font-size: 22px;
	background-color: #ffd369;
	border-radius: 5px;
	width: 200px;
	height: 50px;
	color: white;
	margin: 0 auto;
	&:hover {
		cursor: pointer;
	}
`;
