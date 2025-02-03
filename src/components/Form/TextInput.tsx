import { ChangeEvent, FocusEventHandler } from "react";
import { useState } from "react";
import "./Form.css";

interface TextInputProps {
	id?: string;
	name?: string;
	type: string;
	options?: string[];
	// handleChange: FocusEventHandler<HTMLInputElement>;
}

function TextInput({ name, type }: TextInputProps) {
	const [value, setValue] = useState("");
	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e.target.value;
		setValue(newValue);
	}
	return (
		<div className="input">
			<label htmlFor={name}>{name}</label>
			<input id={name} type={type} name={name} onBlur={handleChange} onChange={handleChange} value={value} />
			<div className="error">This field is required</div> */
		</div>
	);
}

export default TextInput;