import React, { Dispatch, SetStateAction } from "react";
import { IProduct } from "../../../store/reducers/ProductsReducer";
import {
	StyledElement,
	StyledElementRow,
	StyledHeader,
	StyledWrapper,
} from "./ProductDetailsModal.styled";

function ProductDetailsModal({
	selectedProduct,
	setShowDetailsModal,
}: {
	selectedProduct: IProduct;
	setShowDetailsModal: Dispatch<SetStateAction<boolean>>;
}) {
	const renderRows = () => {
		return Object.entries(selectedProduct)
			.filter((el, index) => index !== 0)
			.map(([propertyName, propertyValue]) => {
				const preparedValue =
					typeof propertyValue === "object"
						? propertyValue.toLocaleDateString()
						: propertyValue;

				return (
					<StyledElementRow key={propertyName}>
						<h3>{propertyName}</h3>
						<p>{preparedValue}</p>
					</StyledElementRow>
				);
			});
	};

	return (
		<StyledWrapper onClick={() => setShowDetailsModal(false)}>
			<StyledElement>
				<StyledHeader>
					<button onClick={() => setShowDetailsModal(false)}>X</button>
				</StyledHeader>
				{renderRows()}
			</StyledElement>
		</StyledWrapper>
	);
}
export default ProductDetailsModal;
