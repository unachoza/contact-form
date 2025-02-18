import { FormEvent } from "react";
import "./RadioHelp.css";
import "../Form.css";
import { getLabelforInput } from "../../../types/utility";
import RadioSelected from "../../../assets/images/icon-radio-selected.svg";
import { FormValues } from "../../../types/types";

interface RadioInputProps {
	key?: number;
	name: string;
	label: string;
	options: string[];
	formValues: FormValues;
	errorMessage: string;
	// checked: boolean;
	handleUpdates: (e: FormEvent<HTMLInputElement>) => void;
}

const RadioInput = ({ name, label, options, formValues, errorMessage, handleUpdates, ...data }: RadioInputProps) => {
	console.log(formValues);
	return (
		<>
			<fieldset role="radiogroup" aria-required="true" className="radios">
				<legend>Query Type</legend>
				{options.map((option) => {
					return (
						<div className="radio-input-container">
							<input
								{...data}
								id={name}
								type="radio"
								name={name}
								value={option}
								checked={formValues[name as keyof FormValues] === option}
								aria-describedby="queryError"
								onChange={handleUpdates}
								tabIndex={4}
							/>
							<span role="radio" className="radio-button">
								<img src={RadioSelected} alt="selected radio" />
							</span>
							<label htmlFor={name}>{getLabelforInput(option)}</label>
						</div>
					);
				})}
			</fieldset>
			<span className="error-message" id="queryError">
				{errorMessage}
			</span>
		</>
	);
};

export default RadioInput;
