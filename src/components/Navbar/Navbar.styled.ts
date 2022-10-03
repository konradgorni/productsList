import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledWrapper = styled.div`
	padding: 10px 50px;
	background-color: #222831;
	display: flex;
	justify-content: flex-start;
	height: 5vh;
`;
export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: white;
	letter-spacing: 1px;
	font-size: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	&:hover {
		background-color: rgba(255, 255, 255, 0.04);
	}
`;
