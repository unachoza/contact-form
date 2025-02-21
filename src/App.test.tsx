import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Toast from "./components/Toast/Toast";
import FormDataInput from "./components/Form/TextInput/FormDataInput";
import RadioInput from "./components/Form/Radio/RadioInput";
import CheckboxInput from "./components/Form/Checkbox/CheckboxInput";
import TextareaInput from "./components/Form/TextareaInput/TextareaInput";
import Button from "./components/Button/Button";
import App from "./App";
import userEvent from "@testing-library/user-event";

interface MockFormValuesType {
	firstNameExamplename: string;
	lastNameExamplename: string;
	emailExamplename: string;
	queryTypeExample: string;
	messageExample: string;
	checkboxExampleName: boolean | null;
}

let mockFormValues: MockFormValuesType = {
	firstNameExamplename: "",
	lastNameExamplename: "",
	emailExamplename: "",
	queryTypeExample: "",
	messageExample: "",
	checkboxExampleName: null,
};

const handleUpdates = (e: any) => {
	mockFormValues = { ...mockFormValues, [e.currentTarget.name]: e.currentTarget.value };
};

describe("App component", () => {
	it("should have default text", () => {
		render(<App />);
		const message = screen.queryByText(/Contact Us/);
		expect(message).toBeVisible();
	});

	it("should have correct form structure rendering form elements from formfields", () => {
		render(<App />);
		const formElements = [
			...screen.getAllByRole("textbox"), // text, email, textarea
			...screen.getAllByRole("radio"), // radio buttons
			...screen.getAllByRole("checkbox"), // checkboxes
		];
	});

	//NOT PASSING TEST
	it("should have aria-labels so that inputs, error messages, and the success message announced with users' screen reader", async () => {
		vi.spyOn(window, "alert").mockImplementation(() => {});
		const handleSubmit = vi.fn();
		render(
			<form onSubmit={handleSubmit}>
				<FormDataInput
					key={1}
					type="text"
					name="firstNameExamplename"
					label="firstNameExamplelabel"
					errorMessage="opps there is a firstName error"
					handleUpdates={handleUpdates}
				/>
				<FormDataInput
					key={2}
					type="text"
					name="lastNameExamplename"
					label="lastNameExamplelabel"
					errorMessage="opps there is a lastName error"
					handleUpdates={handleUpdates}
				/>
				<FormDataInput
					key={3}
					type="email"
					name="emailExamplename"
					label="emailExamplelabel"
					errorMessage="opps there is a email error"
					handleUpdates={handleUpdates}
				/>
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
				<TextareaInput
					key={5}
					type="textarea"
					name="messageExample"
					label="messageExample"
					errorMessage="oops there was an error"
					handleUpdates={handleUpdates}
				/>
				<CheckboxInput
					key={6}
					name="checkboxExamplename"
					label="checkboxExamplelabel"
					errorMessage="opps there is a checkbox error"
					handleUpdates={handleUpdates}
				/>
				<Button text="submit" />
			</form>
		);
		const inputs = screen.getAllByRole("textbox");
		const firstInput = inputs[0];
		const errorMessage = screen.getByText("opps there is a firstName error");
		const submitButton = screen.getByRole("button");
		expect(document.body).toHaveFocus();
		expect(errorMessage).toHaveStyle("visibility: hidden");

		await userEvent.tab();
		expect(firstInput).toHaveFocus();
		await userEvent.type(firstInput, "blah");
		expect(firstInput).toHaveValue("blah");
		await userEvent.clear(firstInput);
		// expect(firstInput).toHaveValue("blah");
		await userEvent.tab();
		expect(inputs[1]).toHaveFocus();
		await userEvent.click(submitButton);
		expect(handleSubmit).toHaveBeenCalledTimes(1);
		expect(errorMessage).toHaveStyle("visibility: visible");
	});

	//NOT PASSING TEST
	it("should alert user on sucess with toast including aria attributes", async () => {
		vi.spyOn(window, "alert").mockImplementation(() => {});
		let mockToastOpen = false;
		let mockIsSubmited = false;
		const handleSubmit = (e: any) => {
			e.preventDefault();
			if (Object.values(mockFormValues).every((value) => value)) {
				mockToastOpen = true;
				mockIsSubmited = true;
			}
		};
		render(
			<>
				{mockFormValues && mockIsSubmited && <Toast />}
				<form onSubmit={handleSubmit}>
					<FormDataInput
						key={1}
						type="text"
						name="firstNameExamplename"
						label="firstNameExamplelabel"
						errorMessage="opps there is a firstName error"
						handleUpdates={handleUpdates}
					/>
					<FormDataInput
						key={2}
						type="text"
						name="lastNameExamplename"
						label="lastNameExamplelabel"
						errorMessage="opps there is a lastName error"
						handleUpdates={handleUpdates}
					/>
					<FormDataInput
						key={3}
						type="email"
						name="emailExamplename"
						label="emailExamplelabel"
						errorMessage="opps there is a email error"
						handleUpdates={handleUpdates}
					/>
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
					<TextareaInput
						key={5}
						type="textarea"
						name="messageExample"
						label="messageExample"
						errorMessage="oops there was an error"
						handleUpdates={handleUpdates}
					/>
					<CheckboxInput
						key={6}
						name="checkboxExamplename"
						label="checkboxExamplelabel"
						errorMessage="opps there is a checkbox error"
						handleUpdates={handleUpdates}
					/>
					<Button text="submit" />
				</form>
			</>
		);

		const formElements = [
			...screen.getAllByRole("textbox"), // text, email, textarea
			...screen.getAllByRole("radio"), // radio buttons
			...screen.getAllByRole("checkbox"), // checkboxes
			...screen.getAllByRole("button"), // button
		];

		expect(formElements).toHaveLength(10);

		// Fill out the form
		await userEvent.type(formElements[0], "John");
		expect(formElements[0]).toHaveValue("John");
		await userEvent.type(formElements[1], "Doe");
		expect(formElements[1]).toHaveValue("Doe");
		await userEvent.type(formElements[2], "john.doe@example.com");
		expect(formElements[2]).toHaveValue("john.doe@example.com");
		await userEvent.type(formElements[3], "This is a test message");
		expect(formElements[3]).toHaveValue("This is a test message");

		//radio buttons
		await userEvent.click(formElements[4]);
		expect(formElements[4]).toHaveFocus();
		expect(formElements[4]).not.toBeChecked();
		await userEvent.click(formElements[4]);
		await userEvent.click(formElements[5]);
		await userEvent.click(formElements[7]);
		await userEvent.click(formElements[8]);
		await userEvent.click(formElements[9]);
		await userEvent.click(screen.getByRole("button"));
		expect(handleSubmit).toHaveBeenCalled();

		// // Click the submit button
		await userEvent.click(screen.getByRole("button", { name: /submit/i }));
		expect(handleSubmit).toHaveBeenCalledTimes(3);

		// Assert that the success toast appears
		expect(screen.getByText(/message sent!/)).toBeInTheDocument();
	});

	//NOT PASSING TEST
	it("FormDataInput resizes based on window width should display optimal layout for the interface depending on their device's screen size", () => {
		// Mock handleUpdates function
		const mockHandleUpdates = vi.fn();

		// Set window width to more than 450px
		window.innerWidth = 800;

		// Render component
		render(
			<FormDataInput
				key={1}
				type="text"
				name="testInput"
				label="Test Input"
				errorMessage="Error message"
				handleUpdates={mockHandleUpdates}
				halfSize={true}
			/>
		);

		// Expect width to be 48% when window width > 450px
		const inputContainer = screen.getByRole("textbox").closest(".input");
		expect(inputContainer).toHaveStyle("width: 48%");

		// Change window width to <= 450px and trigger resize event
		act(() => {
			window.innerWidth = 400;
			window.dispatchEvent(new Event("resize"));
		});

		// Re-render to apply new styles
		render(
			<FormDataInput
				key={2}
				type="text"
				name="testInput"
				label="Test Input"
				errorMessage="Error message"
				handleUpdates={mockHandleUpdates}
				halfSize={true}
			/>
		);

		// FAILS//
		expect(screen.getAllByRole("textbox")[0].closest(".input")).toHaveStyle("width: 100%");
	});

	//NOT PASSING TEST
	it("should show toast on successful form submission", async () => {
		let mockToastOpen = false;
		let mockIsSubmitted = false;

		// Ensure mockFormValues are updated
		const handleSubmit = (e: any) => {
			e.preventDefault();
			if (Object.values(mockFormValues).every((value) => value)) {
				mockToastOpen = true;
				mockIsSubmitted = true;
			}
		};

		render(
			<>
				{mockToastOpen && mockIsSubmitted && <Toast />}
				<form onSubmit={handleSubmit}>
					<FormDataInput
						key={1}
						type="text"
						name="firstNameExamplename"
						label="First Name"
						errorMessage="Oops, first name error"
						handleUpdates={handleUpdates}
					/>
					<FormDataInput
						key={2}
						type="text"
						name="lastNameExamplename"
						label="Last Name"
						errorMessage="Oops, last name error"
						handleUpdates={handleUpdates}
					/>
					<FormDataInput
						key={3}
						type="email"
						name="emailExamplename"
						label="Email"
						errorMessage="Oops, email error"
						handleUpdates={handleUpdates}
					/>
					<RadioInput
						key={4}
						name="queryTypeExample"
						label="Query Type"
						options={["exampleRadioValue1", "exampleRadioValue2"]}
						//@ts-ignore
						formValues={mockFormValues}
						errorMessage="Oops, radio error"
						handleUpdates={handleUpdates}
					/>
					<TextareaInput
						key={5}
						type="textarea"
						name="messageExample"
						label="Message"
						errorMessage="Oops, message error"
						handleUpdates={handleUpdates}
					/>
					<CheckboxInput
						key={6}
						name="checkboxExampleName"
						label="Consent"
						errorMessage="Oops, checkbox error"
						handleUpdates={handleUpdates}
					/>
					<Button text="Submit" />
				</form>
			</>
		);

		// Fill form inputs
		await userEvent.type(screen.getByLabelText(/first name/i), "John");
		mockFormValues.firstNameExamplename = "John";

		await userEvent.type(screen.getByLabelText(/last name/i), "Doe");
		mockFormValues.lastNameExamplename = "Doe";

		await userEvent.type(screen.getByLabelText(/email/i), "john.doe@example.com");
		mockFormValues.emailExamplename = "john.doe@example.com";

		await userEvent.type(screen.getByLabelText(/message/i), "Test message");
		mockFormValues.messageExample = "Test message";

		await userEvent.click(screen.getByRole("radio", { name: /exampleRadioValue1/i }));
		mockFormValues.queryTypeExample = "exampleRadioValue1";

		await userEvent.click(screen.getByRole("checkbox", { name: /consent/i }));
		mockFormValues.checkboxExampleName = true;

		// Submit form
		await userEvent.click(screen.getByRole("button", { name: /submit/i }));

		// Check if form values were updated
		expect(mockFormValues).toEqual({
			firstNameExamplename: "John",
			lastNameExamplename: "Doe",
			emailExamplename: "john.doe@example.com",
			queryTypeExample: "exampleRadioValue1",
			messageExample: "Test message",
			checkboxExampleName: true,
		});

		// Ensure toast is shown after successful submission
		expect(screen.getByText(/message sent!/i)).toBeInTheDocument();
	});
});
