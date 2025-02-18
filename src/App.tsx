import { FormEvent, useEffect, useState } from "react";
import Button from "./components/Button/Button";
import FormDataInput from "./components/Form/FormDataInput";
import RadioInput from "./components/Form/Radio/RadioInput";
import TextBoxInput from "./components/Form/TextBoxInput";
import CheckboxInput from "./components/Form/Checkbox/CheckboxInput";
import Toast from "./components/Toast/Toast";
import { formFields, FormFields, FormValues } from "./types/types";
import "./App.css";

const INITIAL_FORM_VALUES: FormValues = {
	firstName: "",
	lastName: "",
	email: "",
	queryType: "",
	message: "",
	consent: null,
};

const App = () => {
	const [formValues, setFormValues] = useState<FormValues>(INITIAL_FORM_VALUES);
	const [toastOpen, setToastOpen] = useState<boolean>(false);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [hasConsent, setHasConsent] = useState<boolean>(false);

	const handleChange = (e: { currentTarget: { name: string; value: string; type: string; checked?: boolean } }) => {
		const { name, value, type, checked } = e.currentTarget;

		setFormValues((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const rawValues = Object.fromEntries(formData);
		const formValues = {
			...rawValues,
			consent: rawValues.consent === "on", // Convert checkbox to boolean
		};
		if (Object.values(formValues).every((value) => value)) {
			console.log(Object.entries(formValues));
			setIsSubmitted(true);
			setToastOpen(true);
		}
		console.log("Final Form Data:", formValues);
	};

	const handleFormField = (formFieldData: FormFields) => {
		const { id, type, name, value, ...data } = formFieldData;
		switch (type) {
			case "text":
			case "email":
				return <FormDataInput key={id!} type={type} name={name!} handleUpdates={handleChange} {...data} />;
			case "radio":
				return (
					<RadioInput
						key={id}
						name={name}
						options={value!}
						formValues={formValues}
						// checked={formValues[name as keyof FormValues] === value}
						handleUpdates={handleChange}
						{...data}
					/>
				);
			case "textarea":
				return <TextBoxInput key={id} name={name} handleUpdates={handleChange} {...data} />;

			case "checkbox":
				return (
					<CheckboxInput
						key={id}
						name={name}
						checked={formValues[name as keyof FormValues] === true}
						handleUpdates={handleChange}
						{...data}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<div>
			{isSubmitted && toastOpen ? <Toast /> : null}
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
