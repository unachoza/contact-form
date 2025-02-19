import { ChangeEvent } from "react";
import { useState } from "react";
// import "./Form.css";

interface TextInputProps {
	key?: number;
	id?: number;
	label?: string;
	errorMessage?: string;
	onChange?: (value: string) => void;
	name?: string;
	value?: string;
	handleInput?: (name: string, value: string) => void;
}

function TextInput({ name, handleInput }: TextInputProps) {
	const [value, setValue] = useState("");

	function getLabelforInput(string: string): string {
		let splitString = string.split(/(?=[A-Z])/);
		let upperCaseString = splitString.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
		let formatedLabel = upperCaseString.join(" ");
		return formatedLabel;
	}
	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e.target.value;
		setValue(newValue);
	}
	return (
		<div className="input">
			<label htmlFor={name}>{getLabelforInput(name!)}</label>
			<input
				id={name}
				type="text"
				aria-label={getLabelforInput(name!)}
				name={name}
				value={value}
				onChange={handleInputChange}
				onBlur={(e) => handleInput!(e.currentTarget.name, e.currentTarget.value)}
				required
			/>
			<div className="error">This field is required</div>
		</div>
	);
}

export default TextInput;
