import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import ProductsList from "./pages/ProductsList/ProductsList";
import ProductCreator from "./pages/ProductCreator/ProductCreator";
import Navbar from "./components/Navbar/Navbar";
import ProductEditor from "./pages/ProductEditor/ProductEditor";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/products" element={<ProductsList />} />
					<Route path="/products/add" element={<ProductCreator />} />
					<Route path="/products/:id/edit" element={<ProductEditor />} />
					<Route path="*" element={<Navigate to="/products" />} />
				</Routes>
				<ToastContainer />
			</div>
		</Router>
	);
}

export default App;
// #222831
