import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "../Button/Button";

describe("The Input Component", () => {
	beforeEach(() => {
		render(<TextInput name="example" value="exampleValue" handleInput={vi.fn()} />);
		render(<Button text="submit" />);
	});

	it("should have a label associated with input that is capitalized", async () => {
		const inputElement = screen.getByLabelText(/Example/);
		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toHaveAttribute("type", "text");
	});

	it("should update value on user input", async () => {
		const inputElement = screen.getByLabelText(/Example/);
		fireEvent.change(inputElement, { target: { value: "Hello" } });
		expect(inputElement).toHaveValue("Hello");
	});

	it("should have aria-labels so that inputs, error messages, and the success message announced with users' screen reader", () => {
		const inputElement = screen.getByRole("textbox", { name: "Example" });
		expect(inputElement).toBeInTheDocument();
	});

	it("should allow users to tab through inputs using their keyboard", () => {});
	it("is a required entry, should display error message if field is required", () => {});
	it("should display error message if email is not formated properly", () => {});
});

describe("The Radio Input Component", () => {
	beforeEach(() => {
		render(<RadioInput id="exampleId" name="exampleName" value="exampleValue" />);
	});

	it("should have the correct label associated with value", () => {
		const radioInputElement = screen.getByLabelText("exampleValue");
		expect(radioInputElement).toBeInTheDocument();
	});
});

describe("the form ", () => {
	it("should display a success toast message upon successful submission", () => {});
	it("should allow users to complete the form using only their keyboard", () => {
		const firstNameInput = screen.getByLabelText("First Name");
		const lastNameInput = screen.getByLabelText("Last Name");
		const submitButton = screen.getByRole("button", { name: /submit/i });

		// Simulate tabbing through the form elements
		userEvent.tab();
		expect(firstNameInput).toHaveFocus();

		userEvent.tab();
		expect(lastNameInput).toHaveFocus();

		userEvent.tab();
		expect(submitButton).toHaveFocus();
	});
	it("should have aria-labels so that inputs, error messages, and the success message announced with users' screen reader", () => {});
	it("should display optimal layout for the interface depending on their device's screen size", () => {});
	it("should allow users to See hover and focus states for all interactive elements on the page", () => {});
});
