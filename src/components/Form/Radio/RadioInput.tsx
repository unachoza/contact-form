import { FormEvent, KeyboardEvent } from "react";
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
	halfSize?: boolean;
	handleUpdates: (e: FormEvent<HTMLInputElement>) => void;
}

const RadioInput = ({ name, label, options, formValues, errorMessage, halfSize, handleUpdates, ...data }: RadioInputProps) => {
	const screensizeWidth = window.innerWidth > 450 ? "50%" : "100%";
	//function to select radio input whilst using custom radio style with span/image ensuring accessibility
	const handleSpacebarPress = (e: KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			const spanElement = e.currentTarget as HTMLElement;
			const radioInput = spanElement.previousElementSibling as HTMLInputElement | null;
			if (radioInput) {
				radioInput.click();
			}
		}
	};
	return (
		<>
			<fieldset data-testid="radio-group-test" role="radiogroup" aria-required="true" className="radios">
				<legend>{label}</legend>
				{options.map((option) => {
					return (
						<div
							key={`${option}-id`}
							className="radio-input-container"
							style={halfSize ? { width: screensizeWidth } : { width: "100%" }}
						>
							<input
								{...data}
								id={name}
								type="radio"
								name={name}
								value={option}
								checked={formValues[name as keyof FormValues] === option}
								aria-describedby={`${name}-error`}
								onChange={handleUpdates}
								tabIndex={-1}
							/>
							<span
								role="radio"
								tabIndex={0}
								className="radio-button"
								aria-checked={formValues[name as keyof FormValues] === option}
								onKeyDown={handleSpacebarPress}
							>
								<img src={RadioSelected} alt="selected radio" />
							</span>
							<label htmlFor={name}>{getLabelforInput(option)}</label>
						</div>
					);
				})}
			</fieldset>
			<span className="error-message" role="alert" id={`${name}-error`}>
				{errorMessage}
			</span>
		</>
	);
};

export default RadioInput;
