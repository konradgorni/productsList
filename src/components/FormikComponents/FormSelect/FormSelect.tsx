import React from "react";
import { useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { StyledSelect, StyledWrapper } from "./FormSelect.styled";
import { StyledLabel, StyledErrorMessage } from "../FormikComponents.styled";

function FormSelect({
	fieldName,
	labelName,
	options,
}: {
	fieldName: string;
	labelName: string;
	options: { label: string; value: string }[];
}) {
	const { setFieldValue, values } = useFormikContext<any>();

	return (
		<StyledWrapper>
			<StyledLabel htmlFor={fieldName}>{labelName}</StyledLabel>
			<StyledSelect
				defaultInputValue={values[fieldName]}
				options={options}
				name={fieldName}
				onChange={(option: { label: string; value: string } | null) => {
					setFieldValue(fieldName, option?.value);
				}}
			/>
			<StyledErrorMessage component="div" name={fieldName} />
		</StyledWrapper>
	);
}
export default FormSelect;
