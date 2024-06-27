import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe("Text Input Component", () => {
	it("should have label associated", () => {
		render(<TextInput name="example" type="text" handleChange={(e) => console.log(e)} />);
	});
	it("should be responsive", () => {});
	it("should correctly save user input to state", () => {});
	it("should behave as required", () => {});
});
