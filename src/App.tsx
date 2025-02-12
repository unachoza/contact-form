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
		console.log({ formValues });
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const formValues = Object.fromEntries(formData);
		console.log({ formValues });
	};

	const handleFormField = (formFieldData: FormFields) => {
		const { id, type, ...data } = formFieldData;
		switch (type) {
			case "text":
				return <FormDataInput key={id} type={type} {...data} handleUpdate={handleChange} />;
			case "email":
				return <FormDataInput key={id} type={type} {...data} handleUpdate={handleChange} />;
			case "radio":
				return <RadioInput key={id} value={formFieldData.value!} {...data} />;
			case "textarea":
				return <TextBoxInput key={id} {...data} />;
			case "checkbox":
				return <CheckboxInput key={id} {...data} />;
			default:
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Contact Us</h1>
				{formFields.map((input) => {
					return handleFormField(input);
				})}
				<Button text="Submit" />
			</form>
		</div>
	);
};

export default App;
