import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import FormDataInput from "./TextInput/FormDataInput";

describe("The Form Elements", () => {
	beforeEach(() => {
		vi.spyOn(window, "alert").mockImplementation(() => {});
	});

	it("should have a label associated with", async () => {
		render(
			<FormDataInput
				key={1}
				type="text"
				name="firstNameExamplename"
				label="firstNameExamplelabel"
				errorMessage="opps there is a firstName error"
				handleUpdates={vi.fn()}
			/>
		);
		const labeledInputElement = screen.getByLabelText("firstNameExamplelabel");
		expect(labeledInputElement).toBeInTheDocument();
		expect(labeledInputElement).toHaveAttribute("type", "text");
	});

	it("should update value on user input", async () => {
		render(
			<FormDataInput
				key={1}
				type="text"
				name="exampleName"
				label="exampleLabel"
				errorMessage="opps there is an error"
				handleUpdates={vi.fn()}
			/>
		);
		const input = screen.getByRole("textbox");

		//user types name "Jane"
		await userEvent.type(input, "Jane");
		expect(input).toHaveValue("Jane");

		//user clears input and types name "Bob"
		await userEvent.clear(input);
		expect(input).not.toHaveValue("Jane");
		await userEvent.type(input, "Bob");
		expect(input).toHaveValue("Bob");
	});

	it("should allow users to tab through inputs using their keyboard", async () => {
		render(
			<div>
				<FormDataInput
					key={1}
					type="text"
					name="firstNameExamplename"
					label="firstNameExamplelabel"
					errorMessage="opps there is a firstName error"
					handleUpdates={vi.fn()}
				/>
				<FormDataInput
					key={2}
					type="text"
					name="lastNameExamplename"
					label="lastNameExamplelabel"
					errorMessage="opps there is a lastName error"
					handleUpdates={vi.fn()}
				/>
				<FormDataInput
					key={3}
					type="email"
					name="emailExamplename"
					label="emailExamplelabel"
					errorMessage="opps there is a email error"
					handleUpdates={vi.fn()}
				/>
			</div>
		);
		const formInputs = screen.getAllByRole("textbox");
		expect(document.body).toHaveFocus();

		//user hits tab on keyboard 3 times and is focused on last input
		await userEvent.tab();
		await userEvent.tab();
		await userEvent.tab();
		expect(formInputs[2]).toHaveFocus();
	});

	//NOT PASSING TEST
	it("shows error message when input is left empty and loses focus", async () => {
		render(
			<form>
				<FormDataInput key={1} type="text" name="username" label="Username" errorMessage="This field is required" handleUpdates={() => {}} />
			</form>
		);

		const input = screen.getByRole("textbox");
		const errorMessage = screen.getByText("This field is required");

		// Initially, the error message should be hidden
		expect(errorMessage).toHaveStyle("visibility: hidden");

		// Simulate blur without entering text (user leaves the field empty)
		expect(document.body).toHaveFocus();
		await userEvent.tab();
		expect(input).toHaveFocus();
		await userEvent.type(input, "blah[Tab]");
		await userEvent.clear(input);
		await userEvent.tab();
		expect(document.body).toHaveFocus();
		// Now, the error message should be visible
		// FAILS//
		expect(errorMessage).toHaveStyle("visibility: visible");
		expect(errorMessage).toBeVisible();
		// FAILS//
		// Check that the input has `user-invalid` styles applied
		expect(input).toHaveAttribute("aria-invalid", "true"); // This checks if it's marked invalid for accessibility
	});
});
