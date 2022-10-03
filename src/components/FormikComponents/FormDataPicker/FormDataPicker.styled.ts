import styled from "styled-components";
import DatePicker from "react-datepicker";
import {
	formFieldStyles,
	formGlobalVariables,
} from "../FormikComponents.styled";

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: ${formGlobalVariables.margin};
`;

export const StyledDatePicker = styled(DatePicker)`
	${formFieldStyles};
	resize: none;
	&:focus {
		outline: none;
		border: 1px solid #ffd369;
	}
`;
