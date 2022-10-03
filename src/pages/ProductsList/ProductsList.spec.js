import React from "react";
import ProductsList from "./ProductsList";
import { render, screen } from "../../tests/setup";

describe("ProductsList", () => {
	describe("Layout", () => {
		it("render default 3 products", () => {
			render(<ProductsList />);
			const editBtns = screen.getAllByRole("button", { name: "Edit" });
			expect(editBtns).toHaveLength(3);
		});
		it("display name of products", () => {
			render(<ProductsList />);
			screen.getByText("iPhone 12 Pro Max");
			screen.getByText("iPhone 12 Pro");
			screen.getByText("Dell inspiron 15");
		});
	});
});
