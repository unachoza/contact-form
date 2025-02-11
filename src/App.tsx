import { FormEvent, useEffect, useState } from "react";
import Button from "./components/Button/Button";
import FormDataInput from "./components/Form/FormDataInput";
import RadioInput from "./components/Form/RadioInput";
import TextBoxInput from "./components/Form/TextBoxInput";
import CheckboxInput from "./components/Form/CheckboxInput";
import { formFields, FormFields } from "./types/types";
import "./App.css";

interface FormValues {
	[firstName: string]: string;
}

const formValues = {
	firstName: "",
};

const INITIAL_FORM_VALUES: FormValues = {
	firstName: "",
};

const App = () => {
	const [formValues, setFormValues] = useState<FormValues>(INITIAL_FORM_VALUES);

	const handleChange = (e: { currentTarget: { name: string; value: string } }) => {
		setFormValues({ ...formValues, [e.currentTarget.name]: e.currentTarget.value });
	};

	const handleFormField = (formFieldData: FormFields) => {
		const { type, ...data } = formFieldData;
		switch (type) {
			case "text":
				console.log("this is is a text input type");
				return <FormDataInput type={type} {...data} />;
			case "email":
				console.log("this is is a email input type");
				return <FormDataInput type={type} {...data} />;
			case "radio":
				console.log("render radio input");
				return <RadioInput value={formFieldData.value!} {...data} />;
			case "textarea":
				console.log("render textbox");
				return <TextBoxInput {...data}/>
			case "checkbox":
				console.log("render checkbox");
				return <CheckboxInput {...data}/>
				break;
			default:
		}
	};

	return (
		<div>
			<form>
				<h1>Contact Us</h1>
				{formFields.map((input) => {
					console.log({ input });
					return handleFormField(input);
					// return <FormDataInput key={input.id} {...input} />;
				})}
				<Button text="Submit" />
			</form>
		</div>
	);
};

export default App;
