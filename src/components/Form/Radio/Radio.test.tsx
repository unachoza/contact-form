import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import RadioInput from "./RadioInput";

interface MockFormValuesType {
	querytypeExampleName: string;
}

// Mock form values state and update function
let mockFormValues: MockFormValuesType = { querytypeExampleName: "" };

const handleUpdates = (e: any) => {
	mockFormValues = { ...mockFormValues, [e.currentTarget.name]: e.currentTarget.value };
};
describe("The Radio Input Component", () => {
	beforeEach(() => {
		mockFormValues = { querytypeExampleName: "" }; // Reset before each test
		render(
			<form>
				<RadioInput
					key={4}
					name="querytypeExampleName"
					label="querytypeExampleLabel"
					options={["exampleRadioValue1", "exampleRadioValue2"]}
					//@ts-ignore
					formValues={mockFormValues}
					errorMessage="opps there was a radio error"
					halfSize={true}
					handleUpdates={handleUpdates}
				/>
			</form>
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

	it("should allow users to select radio input with keyboard", async () => {
		const radioInputs = screen.getAllByRole("radio") as HTMLInputElement[];
		const firstRadio = radioInputs[0];
		const firstSpan = radioInputs[1];
		const secondRadio = radioInputs[2];

		const radioGroupElement = screen.getByTestId("radio-group-test");

		// Confirm radios are initially unchecked
		expect(firstRadio.checked).toBe(false);
		expect(secondRadio.checked).toBe(false);

		// Move focus to first radio and press space
		await userEvent.tab();
		expect(firstSpan).toHaveFocus();

		// Expect first radio to be checked
		await userEvent.type(firstRadio, "[Space]");
		expect(mockFormValues.querytypeExampleName).toBe("exampleRadioValue1");
		screen.debug(radioGroupElement);

		// user tabs to second radio and presses Space
		await userEvent.type(secondRadio, "[Space]");
		expect(secondRadio).toHaveFocus();
		expect(mockFormValues.querytypeExampleName).not.toBe("exampleRadioValue1");
		expect(mockFormValues.querytypeExampleName).toBe("exampleRadioValue2");
	});
});
