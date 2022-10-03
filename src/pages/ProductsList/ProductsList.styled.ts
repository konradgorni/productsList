import styled from "styled-components";

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	//justify-content: center;
	align-items: center;
	padding: 20px;
	//height: 95vh;
`;

export const StyledElement = styled.div`
	width: 700px;
	padding: 0 10px;
	height: 70px;
	color: #222831;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
	transition: all 0.3s ease-in-out;
	display: flex;
	justify-content: space-between;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
	margin-bottom: 30px;

	h3 {
		letter-spacing: 1px;
	}
`;
export const StyledButton = styled.button<{ removeButton?: boolean }>`
	border: none;
	background-color: ${({ removeButton }) => (removeButton ? "red" : "#ffd369")};
	color: white;
	padding: 10px 20px;
	border-radius: 5px;
	text-transform: uppercase;
	&:hover {
		cursor: pointer;
	}
	&:first-child {
		margin-right: 10px;
	}
`;
export const StyledAddNewProductButton = styled.button`
	border: none;
	background-color: #ffd369;
	color: white;
	border-radius: 5px;
	padding: 20px 40px;
	font-size: 20px;
	&:hover {
		cursor: pointer;
	}
`;
