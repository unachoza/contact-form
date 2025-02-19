import { ChangeEvent, FormEvent, useState } from "react";
// import "./Form.css";

interface TextBoxInputProps {
	key: number;
	id?: string;
	type?: string;
	name: string;
	label: string;
	errorMessage: string;
	pattern?: string;
	handleUpdates: (e: FormEvent<HTMLTextAreaElement>) => void;
}

const TextBoxInput = (props: TextBoxInputProps) => {
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
				name={name}
				value={value}
				rows={screensizeRows}
				cols={40}
				onChange={handleChange}
				onBlur={handleUpdates}
				aria-describedby={`${name}-error`}
				{...data}
			/>
			<span className="error-message" role="alert" id={`${name}-error`}>
				{errorMessage}
			</span>
		</div>
	);
};

export default TextBoxInput;
