import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootStoreType } from "../../store/store";
import {
	StyledAddNewProductButton,
	StyledButton,
	StyledElement,
	StyledWrapper,
} from "./ProductsList.styled";
import { RemoveProductAction } from "../../store/Actions/ProductsReducerActions";
import { IProduct } from "../../store/reducers/ProductsReducer";
import ProductDetailsModal from "./ProductDetailsModal/ProductDetailsModal";

function ProductsList() {
	const [showDetailsModal, setShowDetailsModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<IProduct>();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const productsList = useSelector((state: RootStoreType) => state.products);

	const handleRemoveElement = (e: any, product: IProduct) => {
		dispatch(RemoveProductAction(product));
	};

	const showProductDetailsHandler = (event: any, product: IProduct) => {
		if (event.target.nodeName !== "BUTTON") {
			setSelectedProduct(product);
			setShowDetailsModal(true);
		}
	};

	return (
		<StyledWrapper>
			{productsList.map((product) => {
				return (
					<StyledElement
						onClick={(event) => showProductDetailsHandler(event, product)}
						key={product.id}
					>
						<h3>{product.name}</h3>
						<div>
							<StyledButton
								onClick={() => navigate(`/products/${product.id}/edit`)}
							>
								Edit
							</StyledButton>
							<StyledButton
								removeButton
								onClick={(e) => handleRemoveElement(e, product)}
							>
								Remove
							</StyledButton>
						</div>
					</StyledElement>
				);
			})}
			{showDetailsModal && selectedProduct && (
				<ProductDetailsModal
					setShowDetailsModal={setShowDetailsModal}
					selectedProduct={selectedProduct}
				/>
			)}
			<StyledAddNewProductButton onClick={() => navigate("/products/add")}>
				Add Product
			</StyledAddNewProductButton>
		</StyledWrapper>
	);
}
export default ProductsList;
