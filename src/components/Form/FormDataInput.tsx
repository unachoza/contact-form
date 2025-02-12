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
	halfSize?: boolean;
}

const FormDataInput = ({ id, name, label, errorMessage, halfSize, ...inputProps }: TextInputProps) => {
	const [value, setValue] = useState("");

	const screensizeWidth = window.innerWidth > 450 ? "48%" : "100%";

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	return (
		<div className="input" style={halfSize ? { width: screensizeWidth } : { width: "100%" }}>
			<label htmlFor={name}>{label}</label>
			<input name={name} value={value} onChange={handleChange} {...inputProps} />
			<span className="error-message">{errorMessage}</span>
		</div>
	);
};

export default FormDataInput;
