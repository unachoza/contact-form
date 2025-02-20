import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import FormDataInput from "./TextInput/FormDataInput";
import RadioInput from "./Radio/RadioInput";

interface MockFormValuesType {
	querytypeExampleName: string;
	// input2: string;
	// input3: string;
}

const mockFormValues: MockFormValuesType = {
	querytypeExampleName: "",
	// input2: "",
	// input3: "",
};

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
		const inputElement = screen.getByRole("textbox");
		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toHaveAttribute("type", "text");
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
		expect(errorMessage).toHaveStyle("visibility: visible");

		// Check that the input has `user-invalid` styles applied
		expect(input).toHaveAttribute("aria-invalid", "true"); // This checks if it's marked invalid for accessibility
	});
});

describe("The Radio Input Component", () => {
	beforeEach(() => {
		render(
			<RadioInput
				key={4}
				name="querytypeExampleName"
				label="querytypeExampleLabel"
				options={["exampleRadioValue1", "exampleRadioValue2"]}
				//@ts-ignore
				formValues={mockFormValues}
				errorMessage="opps there was a radio error"
				halfSize={true}
				handleUpdates={vi.fn()}
			/>
		);
	});

	it("should have the correct label associated with value", () => {
		const radioInputElements = screen.getAllByRole("radio");
		expect(radioInputElements).toHaveLength(4);

		//checking two each radio input has different values
		const firstInputElement = radioInputElements[0] as HTMLInputElement;
		const secondInputElement = radioInputElements[2] as HTMLInputElement;
		expect(firstInputElement.value).not.toEqual(secondInputElement.value);
	});

	it("should allow users to tab through inputs using their keyboard", async () => {
		const radioInputElements = screen.getAllByRole("radio");
		const firstInputElement = radioInputElements[1] as HTMLSpanElement;
		const secondInputElement = radioInputElements[3] as HTMLSpanElement;

		expect(document.body).toHaveFocus();
		await userEvent.tab();
		expect(firstInputElement).toHaveFocus();
		await userEvent.tab();
		expect(secondInputElement).toHaveFocus();
	});

	//NOT PASSING TEST
	it("should allow users to select radio input with keyboard", async () => {
		const radioInputElements = screen.getAllByRole("radio");
		const firstInputElement = radioInputElements[1] as HTMLSpanElement;
		const secondInputElement = radioInputElements[3] as HTMLSpanElement;
		const firstRadioInput = radioInputElements[0] as HTMLInputElement;
		const secondRadioInput = radioInputElements[2] as HTMLInputElement;

		console.log(firstInputElement.ariaChecked);
		//confirming radio is in unchecked state
		expect(firstInputElement.ariaChecked).not.toEqual(true);

		//user tabs to second radio and presses enter
		expect(document.body).toHaveFocus();
		await userEvent.tab();
		expect(firstInputElement).toHaveFocus();
		await userEvent.tab();
		await userEvent.click(secondRadioInput);
		console.log(secondInputElement.ariaChecked);
		await userEvent.type(secondInputElement, "{enter}");
		console.log(secondRadioInput.checked);
		await userEvent.click(secondInputElement);
		console.log(secondInputElement.ariaChecked);
		await userEvent.type(secondRadioInput, "{space}");
		console.log(secondRadioInput.checked);
		// expect(secondInputElement.ariaChecked).toEqual(true)
		// expect(radioInputElements[0].ariaChecked).toEqual(true)
		// expect(radioInputElements[1].ariaChecked).toEqual(true)
		// expect(radioInputElements[2].ariaChecked).toEqual(true)
		console.log({ mockFormValues });
		console.log(secondInputElement.ariaChecked);
		console.log(secondRadioInput.checked);
		expect(secondRadioInput.checked).toEqual(true);
	});
});
