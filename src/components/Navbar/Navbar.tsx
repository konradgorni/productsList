import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<NavLink to="/products">Products List</NavLink>
			<NavLink to="/products/add">Product Creator</NavLink>
		</div>
	);
}
export default Navbar;
