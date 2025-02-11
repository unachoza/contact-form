import { useState } from "react";
import "./Form.css";

interface TextBoxInputProps {
	id: number;
	type?: string;
	name: string;
	label: string;
	errorMessage: string;
	pattern?: string;
}

const TextBoxInput = (props: TextBoxInputProps) => {
	const { label, name, errorMessage } = props;
	return (
		<div className="textarea-input">
			<label>{label}</label>
			<textarea name={name} rows={4} cols={40} />
			<span className="error-message">{errorMessage}</span>
		</div>
	);
};

export default TextBoxInput;
