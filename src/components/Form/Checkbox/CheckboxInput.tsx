import { FormEvent } from "react";
import checkSVG from "../../../assets/images/icon-checkbox-check.svg";
import "./Checkbox.css";

interface CheckboxProps {
	key?: number;
	name: string;
	label: string;
	checked?: boolean;
	errorMessage: string;
	handleUpdates: (e: FormEvent<HTMLInputElement>) => void;
}

const CheckboxInput = ({ label, name, errorMessage, handleUpdates }: CheckboxProps) => {
	return (
		<>
			<div className="checkbox-container">
				<input type="checkbox" id={name} name={name} onChange={handleUpdates} aria-describedby={`${name}-error`} required />
				<span className="checkbox-check" aria-labelledby={name}>
					<img src={checkSVG} alt="check" />
				</span>
				<label id={name} htmlFor={name}>
					{label}
				</label>
			</div>
			<div className="error-message" role="alert" id={`${name}-error`}>
				{errorMessage}
			</div>
		</>
	);
};

export default CheckboxInput;
