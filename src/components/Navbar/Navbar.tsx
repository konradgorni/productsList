import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavLink, StyledWrapper } from "./Navbar.styled";

function Navbar() {
	return (
		<StyledWrapper>
			{/* <StyledNavLink to="/products">Products List</StyledNavLink> */}
			{/* <StyledNavLink to="/products/add">Product Creator</StyledNavLink> */}
		</StyledWrapper>
	);
}
export default Navbar;
