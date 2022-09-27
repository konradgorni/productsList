import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList/ProductsList";
import ProductCreator from "./pages/ProductCreator/ProductCreator";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<ProductsList />} />
				<Route path="/product-creator" element={<ProductCreator />} />
			</Routes>
		</Router>
	);
}

export default App;
