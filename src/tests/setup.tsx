import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store/store";

function RootWrapper({ children }: { children: React.ReactNode }) {
	return (
		<Router>
			<Provider store={store}>{children}</Provider>
		</Router>
	);
}
const customRender = (ui: any, options: any) =>
	render(ui, { wrapper: RootWrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
