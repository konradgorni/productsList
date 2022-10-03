import {
	ADD_PRODUCT,
	EDIT_PRODUCT,
	IProduct,
	REMOVE_PRODUCT,
} from "../reducers/ProductsReducer";

export const AddProductAction = (product: IProduct) => ({
	type: ADD_PRODUCT,
	payload: product,
});
export const EditProductAction = (product: IProduct) => ({
	type: EDIT_PRODUCT,
	payload: product,
});
export const RemoveProductAction = (product: IProduct) => ({
	type: REMOVE_PRODUCT,
	payload: product,
});
