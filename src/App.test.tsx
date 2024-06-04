import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
	it("should have default text", () => {
		render(<App />);
		const message = screen.queryByText(/Click on the Vite/);
		console.log({ message });
		expect(message).toBeVisible();
	});
});
