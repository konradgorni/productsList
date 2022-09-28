import React from "react";
import { useSelector } from "react-redux";
import { RootStoreType } from "../../store/store";

function ProductsList() {
	const { products } = useSelector((state: RootStoreType) => state.products);
	return (
		<div>
			<h1>Products List</h1>
			{products.map((product) => {
				return (
					<div key={product.id}>
						`Name ${product.name} price ${product.price} quantity $
						{product.quantityInStock}`
					</div>
				);
			})}
		</div>
	);
}
export default ProductsList;
