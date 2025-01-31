import { FocusEventHandler } from "react";
import "./Form.css";

interface TextInputProps {
	id?: string;
	name?: string;
	type: string;
	value?: string;
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
			<label htmlFor={name}></label>
			<input type={type} onBlur={handleChange} onChange={handleChange} />
			<div className="error">This field is required</div>
		</div>
	);
}

export default TextInput;
