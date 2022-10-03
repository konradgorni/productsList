import styled from "styled-components";
import { Field } from "formik";
import { formFieldStyles } from "../FormikComponents.styled";

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 0 50px 0;
`;
export const StyledField = styled(Field)`
	${formFieldStyles};
	resize: none;
	height: 100px;
	&:focus {
		outline: none;
		border: 1px solid #ffd369;
	}
`;
