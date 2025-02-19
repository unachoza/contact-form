import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button Component", () => {
	it("should contain correct text", () => {
		render(<Button text="submit" />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toHaveTextContent("submit");
	}),
		it("on mouse hover shows hover css behavior", async () => {
			render(<Button text="submit" />);
			const buttonElementByRole = screen.getByRole("button", { name: /submit/i });
			await userEvent.hover(buttonElementByRole);
			expect(buttonElementByRole).not.toHaveStyle({ "background-color": "#0c7d69" });
			expect(buttonElementByRole).toHaveStyle({ cursor: "pointer" });
		});
});
