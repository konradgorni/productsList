import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStoreType } from "../../store/store";
import ProductForm, {
	IFormikValues,
} from "../../components/FormikComponents/ProductForm/ProductForm";

function ProductEditor() {
	const [product, setProduct] = useState<IFormikValues>();
	const { id } = useParams();
	const productsList = useSelector((state: RootStoreType) => state.products);
	useEffect(() => {
		const foundProduct = productsList.find((product) => product.id === id);
		setProduct(foundProduct);
	}, [id]);

	return (
		<>
			{product && (
				<ProductForm
					headerText="Product Editor"
					editMode
					initialValues={product}
				/>
			)}
		</>
	);
}
export default ProductEditor;
