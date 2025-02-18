import { FormEvent, useState } from "react";
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

const CheckboxInput = (props: CheckboxProps) => {
	const { label, name, checked, handleUpdates } = props;

	return (
		<div className="checkbox-container">
			<input type="checkbox" name={name} onChange={handleUpdates} />
			<span className="checkbox-check">
				<img src={checkSVG} alt="check" />
			</span>
			<label>{label}</label>
		</div>
	);
};

export default CheckboxInput;
