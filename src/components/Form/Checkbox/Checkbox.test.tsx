import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import CheckboxInput from "./CheckboxInput";

describe("Checkbox Input Component", () => {
	it("allows checking and unchecking a checkbox", async () => {
		render(
			<CheckboxInput
				key={6}
				name="checkboxExamplename"
				label="checkboxExamplelabel"
				errorMessage="opps there is a checkbox error"
				handleUpdates={vi.fn()}
			/>
		);

		const checkbox = screen.getByRole("checkbox");
		expect(checkbox).not.toBeChecked();
		await userEvent.click(checkbox);
		expect(checkbox).toBeChecked();
		await userEvent.click(checkbox);
		expect(checkbox).not.toBeChecked();
	});
});
