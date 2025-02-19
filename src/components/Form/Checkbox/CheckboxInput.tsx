import { FormEvent } from "react";
import checkSVG from "../../../assets/images/icon-checkbox-check.svg";
import "../Form.css";
import "./Checkbox.css";

interface CheckboxProps {
	key?: number;
	id?: number;
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
				<input type="checkbox" name={name} onChange={handleUpdates} />
				<span className="checkbox-check"
				aria-labelledby="tac"
				>
					<img src={checkSVG} alt="check" />
				</span>
				<label id="tac" htmlFor={name}>{label}</label>
			</div>
			<div className="error-message" id="consentError">
				{errorMessage}
			</div>
		</>
	);
};

export default CheckboxInput;
