import styled from "styled-components";
import { Field } from "formik";
import {
	formFieldStyles,
	formGlobalVariables,
} from "../FormikComponents.styled";

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: ${formGlobalVariables.margin};
`;
export const StyledField = styled(Field)`
	${formFieldStyles}
	&:focus {
		outline: none;
		border: 1px solid #ffd369;
	}
`;
