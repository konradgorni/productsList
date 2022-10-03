import styled from "styled-components";

export const StyledWrapper = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
	position: absolute;
	top: 0;
	border-radius: 5px;
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
	display: flex;
	justify-content: flex-end;
`;
export const StyledElement = styled.div`
	height: 100%;
	width: 500px;
	background-color: #fff;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
	position: relative;
	padding: 10px;
	h3 {
		text-transform: capitalize;
		letter-spacing: 1px;
		color: #ffd369;
	}
	p {
		letter-spacing: 1px;
		font-weight: 500;
		line-height: 30px;
	}
`;
export const StyledHeader = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	button {
		border: none;
		border-radius: 5px;
		color: white;
		background-color: #ffd369;
		padding: 6px 12px;
		font-size: 24px;
		&:hover {
			cursor: pointer;
		}
	}
`;
export const StyledElementRow = styled.div``;
