import { FormEvent, useEffect, useState } from "react";
import Button from "./components/Button/Button";
import FormDataInput from "./components/Form/FormDataInput";
import RadioInput from "./components/Form/RadioInput";
import TextBoxInput from "./components/Form/TextBoxInput";
import CheckboxInput from "./components/Form/CheckboxInput";
// import { formFields, FormFields } from "./types/types";
import "./App.css";

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	queryType: string;
	message: string;
	consent: boolean;
}

const INITIAL_FORM_VALUES: FormValues = {
	firstName: "",
	lastName: "",
	email: "",
	queryType: "",
	message: "",
	consent: false,
};

export interface FormFields {
	id: number;
	type: string;
	label: string;
	name: string;
	value?: string;
	errorMessage: string;
	pattern?: string;
	autoFocus?: boolean;
	required?: boolean;
	halfSize?: boolean;
}

const formFields: FormFields[] = [
	{
		id: 1,
		type: "text",
		name: "firstName",
		label: "First Name",
		errorMessage: "This field is required",
		pattern: "[a-zA-Z]{1,}",
		autoFocus: true,
		required: true,
		halfSize: true,
	},
	{
		id: 2,
		type: "text",
		label: "Last Name",
		name: "lastName",
		errorMessage: "This field is required",
		pattern: "[a-zA-Z]{1,}",
		required: true,
		halfSize: true,
	},
	{
		id: 3,
		type: "email",
		label: "Email",
		name: "email",
		errorMessage: "Please enter a valid email address",
		pattern: "^[A-Za-z0-9_.]*@[A-Za-z0-9_.]+$",
		required: true,
	},
	{
		id: 4,
		type: "radio",
		label: "General Enquery",
		name: "queryType",
		value: "generalEnquiry",
		errorMessage: "Please select a query type",
		required: true,
	},
	{
		id: 5,
		type: "radio",
		label: "Support Request",
		name: "queryType",
		value: "supportRequest",
		errorMessage: "Please select a query type",
		required: true,
	},
];

const App = () => {
	const [formValues, setFormValues] = useState<FormValues>(INITIAL_FORM_VALUES);

	const handleChange = (e: { currentTarget: { name: string; value: string; type: string; checked?: boolean } }) => {
		const { name, value, type, checked } = e.currentTarget;

		setFormValues((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value, // Handle checkboxes properly
		}));

		console.log("Updated Form Values:", formValues);
	};

	const handleInputUpdates = (event: FormEvent<HTMLInputElement>) => {
		const { name, value } = event.currentTarget;
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value, // Ensure only the selected radio value is updated
		}));
		console.log({ formValues });
	};
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const rawValues = Object.fromEntries(formData);
		const formValues = {
			...rawValues,
			consent: rawValues.consent === "on", // Convert checkbox to boolean
		};
		console.log("Final Form Data:", formValues);
	};

	const handleFormField = (formFieldData: FormFields) => {
		const { id, type, name, value, ...data } = formFieldData;
		switch (type) {
			case "text":
			case "email":
				return <FormDataInput key={id!} type={type} name={name!} handleUpdate={handleChange} {...data} />;
			case "radio":
				return (
					<RadioInput
						key={id}
						name={name}
						value={value!}
						checked={formValues[name as keyof FormValues] === value}
						handleUpdates={handleInputUpdates}
						{...data}
					/>
				);
				

			default:
				return null;
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

// case "textarea":
// 	return <TextBoxInput key={id} name={name} value={formValues.message} handleupdate={handleChange} {...data} />;
// case "checkbox":
// 	return <CheckboxInput key={id} name={name} checked={formValues.consent} handleupdate={handleChange} {...data} />;
