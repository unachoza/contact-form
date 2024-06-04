import { useState, Dispatch, SetStateAction } from "react";
import "./TextInput.css";

interface TextInputProps {
	value: string;
	// setValue: Dispatch<SetStateAction<value>>;
}

function TextInput() {
	return (
		<>
			<label></label>
			<input type="text" value={} placeholder={} onBlur={} onChange={} />
		</>
	);
}

export default TextInput;
