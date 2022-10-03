import React from "react";
import ProductForm from "../../components/FormikComponents/ProductForm/ProductForm";

function ProductCreator() {
	const initialValues = {
		name: "",
		price: 0,
		quantityInStock: 0,
		dateOfProduction: new Date(),
		category: "",
		description: "",
	};
	return (
		<ProductForm
			headerText="Product Creator"
			editMode={false}
			initialValues={initialValues}
		/>
	);
}
export default ProductCreator;
