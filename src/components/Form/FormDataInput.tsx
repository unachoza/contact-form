//@ts-nocheck
import { ChangeEvent } from "react";
import { useState } from "react";
import "./Form.css";

interface TextInputProps {
	id?: string;
	label: string;
	errorMessage: string;
	onChange: (value: string) => void;
	name?: string;
	value?: string;
	handleInput?: (name: string, value: string) => void;
}

const ExperimentalTextInput = ({ label, errorMessage, handleInput, onChange, id, ...inputProps }: TextInputProps) => {
	const [focused, setFocused] = useState(false);

	const handleFocus = (e) => {
		setFocused(true);
	};

	return (
		<div>
			<label>{label}</label>
			<input type="text" onChange={handleInput} onBlur={handleFocus} focused={focused.toString()} {...inputProps} />
			<span>{errorMessage}</span>
		</div>
	);
};
