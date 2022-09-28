import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import ProductsList from "./pages/ProductsList/ProductsList";
import ProductCreator from "./pages/ProductCreator/ProductCreator";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/products" element={<ProductsList />} />
				<Route path="/products/add" element={<ProductCreator />} />
				<Route path="*" element={<Navigate to="/products" />} />
			</Routes>
		</Router>
	);
}

export default App;
