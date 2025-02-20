import { screen, render } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import TextareaInput from "./TextareaInput";
import Button from "../../Button/Button";

describe("TextareaInput Component", () => {
	beforeEach(() => {
		vi.spyOn(window, "alert");
		render(
			<>
				<TextareaInput
					key={1}
					type="textarea"
					name="messageExample"
					label="messageExample"
					errorMessage="oops there was an error"
					handleUpdates={vi.fn()}
				/>
				<Button text="submit" />
			</>
		);
	});

	it("should recieve user input", async () => {
		const textareaInputElement = screen.getByRole("textbox", { name: /messageExample/ });
		await userEvent.type(textareaInputElement, "message");
		expect(textareaInputElement).toHaveValue("message");

		await userEvent.clear(textareaInputElement);
		await userEvent.type(textareaInputElement, "new message");
		expect(textareaInputElement).toHaveValue("new message");
	});

	it("should display user error message if error is present", async () => {
		//adding HTMLInputElement type to test the validity state of input
		const textareaInputElement = screen.getByRole("textbox") as HTMLInputElement;
		const buttonElement = screen.getByRole("button");
		const errorAlert = screen.getByTestId("error");
		const errorMessage = screen.getByText("oops there was an error");
		expect(document.body).toHaveFocus();

		await userEvent.tab();
		expect(textareaInputElement).toHaveFocus();

		//textarea starts empty, and user types input
		await userEvent.type(textareaInputElement, "something");
		expect(textareaInputElement).toHaveValue("something");
		

		//user clears their input
		await userEvent.clear(textareaInputElement);
		expect(textareaInputElement).toBeInvalid();
		expect(textareaInputElement).not.toHaveValue("something");

		//user tabs away from textarea input
		await userEvent.tab();
		expect(buttonElement).toHaveFocus();

		//user recieves error message because button was clicked with empty input
		await userEvent.click(buttonElement);
		expect(errorAlert).toBeInTheDocument();
		expect(errorMessage).toBeInTheDocument();
	});
});
