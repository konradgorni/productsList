import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import FormField from "components/FormikComponents/FormField/FormField";
import { useNavigate } from "react-router-dom";
import FormTextarea from "../FormTextarea/FormTextarea";
import FormDataPicker from "../FormDataPicker/FormDataPicker";
import FormSelect from "../FormSelect/FormSelect";
import {
	AddProductAction,
	EditProductAction,
} from "../../../store/Actions/ProductsReducerActions";
import {
	StyledButtonBackToList,
	StyledForm,
	StyledHeader,
	StyledSubmitButton,
	StyledWrapepr,
} from "./ProductForm.styled";

export interface IFormikValues {
	name: string;
	price: number;
	quantityInStock: number;
	dateOfProduction: any;
	category: any;
	description: string;
}

function ProductForm({
	headerText,
	editMode = false,
	initialValues,
}: {
	headerText: string;
	editMode: boolean;
	initialValues: IFormikValues;
}) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const SignupSchema = Yup.object().shape({
		name: Yup.string()
			.required("Name is required")
			.max(100, "Price can not be higher than 100"),
		price: Yup.number()
			.required("Name is required")
			.min(1, "Price can not be lower than 0")
			.max(100000, "Price can not be higher than 100000"),
		quantityInStock: Yup.number()
			.required("QuantityInStock is required")
			.min(1, "Quantity can not be lower than 0")
			.max(100000, "Quantity can not be higher than 100000"),
		dateOfProduction: Yup.date().required("DateOfProduction is required"),
		category: Yup.string().required("Category is required"),
		description: Yup.string()
			.required("Description is required")
			.min(10, "Description is too short")
			.max(2000, "Description is too long"),
	});

	const optionsCategory = [
		{ value: "smartphones", label: "smartphones" },
		{ value: "laptops", label: "laptops" },
		{ value: "displays", label: "displays" },
	];

	return (
		<StyledWrapepr>
			<StyledHeader>
				<h2>{headerText}</h2>
				<StyledButtonBackToList onClick={() => navigate("/products")}>
					Back to List
				</StyledButtonBackToList>
			</StyledHeader>
			<Formik
				initialValues={initialValues}
				validationSchema={SignupSchema}
				onSubmit={(values: IFormikValues) => {
					const productObjWithId = {
						id: uuidv4(),
						...values,
					};
					if (editMode) {
						dispatch(EditProductAction(productObjWithId));
					} else {
						dispatch(AddProductAction(productObjWithId));
					}
					navigate("/products");
				}}
			>
				{() => {
					return (
						<StyledForm>
							<FormField labelName="Name" fieldName="name" />
							<FormField type="number" labelName="Price" fieldName="price" />
							<FormField
								type="number"
								labelName="Quantity In Stock"
								fieldName="quantityInStock"
							/>
							<FormDataPicker
								fieldName="dateOfProduction"
								labelName="Date Of Production"
							/>
							<FormSelect
								fieldName="category"
								labelName="Category"
								options={optionsCategory}
							/>
							<FormTextarea fieldName="description" labelName="Description" />

							<StyledSubmitButton type="submit">
								{editMode ? "Edit" : "Add"}
							</StyledSubmitButton>
						</StyledForm>
					);
				}}
			</Formik>
		</StyledWrapepr>
	);
}
export default ProductForm;
