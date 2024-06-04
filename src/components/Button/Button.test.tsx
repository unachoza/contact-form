import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
	it("should contain correct text", () => {
		render(<Button text="submit" />);
		const buttonElement = screen.getByRole("button");
		console.log({ buttonElement });
		expect(buttonElement).toHaveTextContent("submit");
	}),
		it("should should give valid user feedback; ie: hover status", () => {}),
		it("should should give valid user feedback; ie: click behavior", () => {}),
		it("should trigger click event", () => {});
});
