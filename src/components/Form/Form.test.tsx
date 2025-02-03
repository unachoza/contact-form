import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "./TextInput";
import { describe, it, expect, beforeEach, vi } from "vitest";

describe("The Input Component", () => {
	beforeEach(() => {
		render(<TextInput name="example" type="text" />);
	});

	it("should have a label associated with input", async () => {
		const inputElement = screen.getByLabelText("example");
		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toHaveAttribute("type", "text");
	});

	it("should update value on user input", async () => {
		const inputElement = screen.getByLabelText("example");
		fireEvent.change(inputElement, { target: { value: "Hello" } });
		expect(inputElement).toHaveValue("Hello");
	});
});
