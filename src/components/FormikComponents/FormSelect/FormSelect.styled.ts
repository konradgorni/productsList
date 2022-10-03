import styled from "styled-components";
import Select from "react-select";
import {
	formFieldStyles,
	formGlobalVariables,
} from "../FormikComponents.styled";

export const StyledWrapper = styled.div`
	margin: ${formGlobalVariables.margin};
`;

export const StyledSelect = styled(Select)<any>`
	width: 405px;
	margin-top: 5px;
	input {
		${formFieldStyles};
		resize: none;
		&:focus {
			outline: none;
			border: 1px solid #ffd369;
		}
	}
`;
