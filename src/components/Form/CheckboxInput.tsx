import { useState } from "react";
import checkSVG from "../../assets/images/icon-checkbox-check.svg";
import "./Form.css";

interface CheckboxProps {
	id: number;
	name: string;
	label: string;
	errorMessage: string;
}

const CheckboxInput = (props: CheckboxProps) => {
	const { label, name } = props;
	return (
		<div className="checkbox-container">
			<input type="checkbox" name={name} />
			<span className="checkbox-check">
				<img src={checkSVG} alt="check" />
			</span>
			<label>{label}</label>
		</div>
	);
};

export default CheckboxInput;
