import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
// import "./RadioHelp.css";
import { FormValues } from "../../types/types";
import RadioSelected from "../../assets/images/icon-radio-selected.svg";

interface RadioInputProps {
	key?: number;
	id?: number | string;
	name: string;
	label: string;
	value: string;
	errorMessage: string;
	checked?: boolean;
	formValues?: FormValues[];
	handleUpdates: (e: FormEvent<HTMLInputElement>) => void;
}

const RadioInput = ({ id, name, value, checked, label, errorMessage, handleUpdates, ...data }: RadioInputProps) => {

	return (
		<div className="radio-input-container">
			<input
				{...data}
				id={id?.toString()}
				type="radio"
				name={name}
				value={value}
				checked={checked}
				onChange={(e) => handleUpdates(e)}
				// onBlur={handleupdate}
			/>
			<span className="radio-button">
				<img src={RadioSelected} alt="selected radio" />
			</span>
			<label htmlFor={name}>{label}</label>
			<span className="error-message">{errorMessage}</span>
		</div>
	);
};

export default RadioInput;
