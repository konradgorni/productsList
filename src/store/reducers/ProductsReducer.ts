type ProductCategoryTypes = "smartphones" | "laptops" | "displays";
interface IProduct {
	id: string;
	name: string;
	price: number;
	quantityInStock: number;
	dateOfProduction: Date;
	category: ProductCategoryTypes;
}

interface IState {
	products: IProduct[];
}

const initialState: IState = {
	products: [
		{
			id: "dc17cd35-1de2-4cad-b248-ac6697c407e3",
			name: "iPhone 12 Pro Max",
			price: 999,
			quantityInStock: 10,
			dateOfProduction: new Date("2020-10-23"),
			category: "smartphones",
		},
		{
			id: "d26ec506-43e7-4db4-9753-3fa013fb3a3e",
			name: "iPhone 12 Pro",
			price: 899,
			quantityInStock: 10,
			dateOfProduction: new Date("2020-10-23"),
			category: "smartphones",
		},
		{
			id: "9c69ab6a-be8b-44b1-817f-d97e1cf21b1b",
			name: "Dell inspiron 15",
			price: 1222,
			quantityInStock: 10,
			dateOfProduction: new Date("2020-10-23"),
			category: "laptops",
		},
	],
};
const ProductsReducer = (state: IState = initialState, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default ProductsReducer;
