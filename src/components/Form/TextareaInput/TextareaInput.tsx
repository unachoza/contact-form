import { ChangeEvent, FormEvent, useState } from "react";
// import "./Form.css";
import "./TextareaInput.css";

interface TextareaInputProps {
	key: number;
	type?: string;
	name: string;
	label: string;
	errorMessage: string;
	pattern?: string;
	handleUpdates: (e: FormEvent<HTMLTextAreaElement>) => void;
}

const TextareaInput = (props: TextareaInputProps) => {
	const [value, setValue] = useState("");
	const { label, name, handleUpdates, errorMessage, ...data } = props;

	const screensizeRows = window.innerWidth > 450 ? 4 : 15;

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const value = event.currentTarget.value;
		setValue(value);
	};
	return (
		<div className="textarea-input">
			<label htmlFor={name}>{label}</label>
			<textarea
				id={name}
				name={name}
				value={value}
				rows={screensizeRows}
				cols={40}
				onChange={handleChange}
				onBlur={handleUpdates}
				aria-describedby={`${name}-error`}
				required
				{...data}
			/>
			<span data-testid="error" className="error-message" role="alert" id={`${name}-error`}>
				{errorMessage}
			</span>
		</div>
	);
};

export default TextareaInput;
