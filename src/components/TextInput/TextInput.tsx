import { FocusEventHandler } from "react";
import "./TextInput.css";

interface TextInputProps {
	name?: string;
	type: string;
	options?: string[];
	handleChange: FocusEventHandler<HTMLInputElement>;
}

function TextInput({ name, type, options, handleChange }: TextInputProps) {
	// if (options){
	//     return (
	//         options.map((option) => {
	//             <input type="radio" id="html" name={name} value="HTML"/>
	//               <label for="html">HTML</label>
	//         })
	//     )
	// }

	return (
		<div className="input">
			{name && <label>{name}</label>}
			<input type={type} onBlur={handleChange} onChange={handleChange} />
		</div>
	);
}

export default TextInput;
