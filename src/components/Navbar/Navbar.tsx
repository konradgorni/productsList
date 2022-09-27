import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<NavLink to="/">Products List</NavLink>
			<NavLink to="/product-creator">Product Creator</NavLink>
		</div>
	);
}
export default Navbar;
