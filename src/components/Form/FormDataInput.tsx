import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import "./Form.css";

interface TextInputProps {
	key: number;
	type: string;
	name: string;
	label: string;
	errorMessage: string;
	pattern?: string;
	halfSize?: boolean;
	handleUpdate: (e: FormEvent<HTMLInputElement>) => void;
}

const FormDataInput = ({ name, label, errorMessage, halfSize, handleUpdate, ...inputProps }: TextInputProps) => {
	const [value, setValue] = useState("");

	const screensizeWidth = window.innerWidth > 450 ? "48%" : "100%";

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value;
		setValue(value);
	};

	return (
		<div className="input" style={halfSize ? { width: screensizeWidth } : { width: "100%" }}>
			<label htmlFor={name}>{label}</label>
			<input name={name} value={value} onChange={handleChange} onBlur={handleUpdate} {...inputProps} />
			<span className="error-message">{errorMessage}</span>
		</div>
	);
};

export default FormDataInput;
