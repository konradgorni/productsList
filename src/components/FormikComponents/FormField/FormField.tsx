import React from "react";
import { StyledField, StyledWrapper } from "./FormField.styled";
import { StyledLabel, StyledErrorMessage } from "../FormikComponents.styled";

function FormField({
	labelName,
	fieldName,
	type = "text",
}: {
	fieldName: string;
	labelName: string;
	type?: string;
}) {
	return (
		<StyledWrapper>
			<StyledLabel htmlFor={fieldName}>{labelName}</StyledLabel>
			<StyledField name={fieldName} type={type} />
			<StyledErrorMessage component="div" name={fieldName} />
		</StyledWrapper>
	);
}
export default FormField;
