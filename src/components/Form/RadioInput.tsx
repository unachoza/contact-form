import { FormEventHandler, useState } from "react";
import "./Form.css";

interface RadioInputProps {
	id: number;
	name: string;
	label: string;
	value: string;
	error?: boolean;
	formValues?: string;
	// handleChange: FormEventHandler;
}

const RadioInput = (props: RadioInputProps) => {
	console.log({ props });
	const { name, value, label } = props;
	return (
		<div className="radio-input-container">
			<input
				type="radio"
				id={name}
				name={name}
				value={value}
				checked
			/>
			<span className="radio-button"></span>
			<label htmlFor={name}>{label}</label>
		</div>
	);
};

export default RadioInput;

