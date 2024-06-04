import { FocusEventHandler } from "react";
import "./TextInput.css";

interface TextInputProps {
	name: string;
	handleChange: FocusEventHandler<HTMLInputElement>;
}

function TextInput({ name, handleChange }: TextInputProps) {
	return (
		<>
			<label>{name}</label>
			<input type="text" onBlur={handleChange} onChange={handleChange} />
		</>
	);
}

export default TextInput;
