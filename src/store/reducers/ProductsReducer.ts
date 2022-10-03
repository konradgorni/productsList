import {
	notificationHandler,
	NotificationTypes,
} from "../../utils/notificationHandler";

export type ProductCategoryTypes = "smartphones" | "laptops" | "displays";
export interface IProduct {
	id: string;
	name: string;
	price: number;
	quantityInStock: number;
	dateOfProduction: Date;
	category: ProductCategoryTypes;
	description: string;
}
export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

type IState = IProduct[];

const initialState: IState = [
	{
		id: "dc17cd35-1de2-4cad-b248-ac6697c407e3",
		name: "iPhone 12 Pro Max",
		price: 999,
		quantityInStock: 10,
		dateOfProduction: new Date("2020-10-23"),
		category: "smartphones",
		description: "The iPhone 12 Pro Max is the most powerful iPhone ever.",
	},
	{
		id: "d26ec506-43e7-4db4-9753-3fa013fb3a3e",
		name: "iPhone 12 Pro",
		price: 899,
		quantityInStock: 10,
		dateOfProduction: new Date("2020-10-23"),
		category: "smartphones",
		description: "The iPhone 12 Pro is the most powerful iPhone ever.",
	},
	{
		id: "9c69ab6a-be8b-44b1-817f-d97e1cf21b1b",
		name: "Dell inspiron 15",
		price: 1222,
		quantityInStock: 10,
		dateOfProduction: new Date("2020-10-23"),
		category: "laptops",
		description: "The Dell inspiron 15 is the most powerful laptop ever.",
	},
];

interface PRODUCT_PAYLOAD {
	type: string;
	payload: IProduct;
}

export type IAction = PRODUCT_PAYLOAD;

const ProductsReducer = (state: IState = initialState, action: IAction) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return [...state, action.payload];
		case EDIT_PRODUCT: {
			const newState = [...state];
			const editedProductIndex = newState.findIndex(
				(x) => x.id === action.payload.id,
			);
			newState[editedProductIndex] = action.payload;
			notificationHandler(NotificationTypes.success, "Product edited");
			return newState;
		}
		case REMOVE_PRODUCT: {
			notificationHandler(NotificationTypes.success, "Product removed");
			return state.map((el) => el).filter((el) => el.id !== action.payload.id);
		}
		default:
			return state;
	}
};

export default ProductsReducer;
