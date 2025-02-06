import { ChangeEvent, ChangeEventHandler } from "react";
import { useState } from "react";
import "./Form.css";

interface TextInputProps {
	id: number;
	type: string;
	name: string;
	label: string;
	errorMessage: string;
	pattern?: string;
}

const FormDataInput = ({ id, type, name, label, errorMessage, ...inputProps }: TextInputProps) => {
	const [value, setValue] = useState("");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	return (
		<div className="input">
			<label htmlFor={name}>{label}</label>
			<input name={name} value={value} onChange={handleChange} {...inputProps} />
			<span>{errorMessage}</span>
		</div>
	);
};

export default FormDataInput;
