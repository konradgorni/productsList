import { useFormikContext } from "formik";
import React from "react";
import { StyledDatePicker, StyledWrapper } from "./FormDataPicker.styled";
import { StyledLabel, StyledErrorMessage } from "../FormikComponents.styled";

function FormDataPicker({
	fieldName,
	labelName,
}: {
	fieldName: string;
	labelName: string;
}) {
	const { values, setFieldValue } = useFormikContext<any>();

	return (
		<StyledWrapper>
			<StyledLabel htmlFor={fieldName}>{labelName}</StyledLabel>
			<StyledDatePicker
				name={fieldName}
				selected={values[fieldName]}
				onChange={(date: Date) => {
					setFieldValue(fieldName, date);
				}}
			/>
			<StyledErrorMessage name={fieldName} />
		</StyledWrapper>
	);
}
export default FormDataPicker;
