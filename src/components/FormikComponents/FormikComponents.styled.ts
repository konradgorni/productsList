import styled from "styled-components";
import { ErrorMessage } from "formik";

export const formGlobalVariables = {
	margin: "10px 0",
};
export const formFieldStyles = `
width:400px;
height:40px;
border-radius:5px;
border: 1px solid hsl(0, 0%, 80%);
`;

export const StyledLabel = styled.label`
	color: black;
	margin-bottom: 5px;
	letter-spacing: 1px;
`;
export const StyledErrorMessage = styled(ErrorMessage)`
	color: red;
	margin-top: 5px;
	letter-spacing: 1px;
`;
