import React from "react";
import { render, screen } from "../../../tests/setup";
import ProductForm from "./ProductForm";

const initialValues = {
	name: "",
	price: 0,
	quantityInStock: 0,
	dateOfProduction: new Date(),
	category: "",
	description: "",
};
describe("ProductForm", () => {
	describe("Layout", () => {
		describe("Labels", () => {
			it.each`
				labelName
				${"Name"}
				${"Price"}
				${"Quantity In Stock"}
				${"Date Of Production"}
				${"Category"}
				${"Description"}
			`("has $labelName input", ({ labelName }) => {
				render(
					<ProductForm
						initialValues={initialValues}
						headerText="Product Creator"
						editMode={false}
					/>,
				);
				const label = screen.getByText(labelName);
				expect(label).toBeInTheDocument();
			});
		});
	});
});
