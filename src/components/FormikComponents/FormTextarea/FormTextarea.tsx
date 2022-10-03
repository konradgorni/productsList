import React from "react";
import { StyledField, StyledWrapper } from "./FormTextarea.styled";
import { StyledLabel, StyledErrorMessage } from "../FormikComponents.styled";

function FormTextarea({
	fieldName,
	labelName,
}: {
	fieldName: string;
	labelName: string;
}) {
	return (
		<StyledWrapper>
			<StyledLabel htmlFor={fieldName}>{labelName}</StyledLabel>
			<StyledField component="textarea" name={fieldName} />
			<StyledErrorMessage component="div" name={fieldName} />
		</StyledWrapper>
	);
}
export default FormTextarea;
