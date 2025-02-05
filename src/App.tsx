import { FormEvent, useEffect, useState } from "react";
import Button from "./components/Button/Button";
import TextInput from "./components/Form/TextInput";
import RadioInput from "./components/Form/RadioInput";
import { FormValues } from "./types/types";
import "./App.css";

function App() {
	const [formValues, setFormValues] = useState<FormValues>({
		firstName: "",
		lastName: "",
		email: "",
		queryType: "",
		message: "",
		consent: false,
	});

	useEffect(() => {
		//handleKeyDown
	})
	const handleInput = (name: string, value: string) => {
		setFormValues((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	
	const validateForm = () => {
		//loop through all values and check if they are required
		// if (required && value !== "") {
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		// validateForm()
		const formData = new FormData(e.currentTarget);
		console.log(Object.fromEntries(formData));
	};

	return (
		<>
			<form method="POST" onSubmit={handleSubmit}>
				<h1>Contact Us</h1>
				<div className="row">
					<TextInput name="firstName" handleInput={handleInput} value={formValues.firstName} />
					<TextInput name="Last Name" handleInput={handleInput} value={formValues.lastName} />
				</div>
				<TextInput name="Email Address" handleInput={handleInput} value={formValues.email} />
				<div className="error">Please enter a valid email address</div>
				<div className="error">This field is required</div>
				<fieldset>
					<RadioInput id="general" name="queryType" value="General Enquiry" />
					<RadioInput id="support" name="queryType" value="Support Request" />
				</fieldset>
				<TextInput name="Message" handleInput={handleInput} value={formValues.message} />
				<Button text="Submit" />
			</form>
		</>
	);
}

export default App;

// Contact Us

// First Name
// This field is required

// Last Name
// This field is required

// Email Address
// Please enter a valid email address
// This field is required

// Query Type
// General Enquiry
// Support Request
// Please select a query type

// Message
// This field is required

// I consent to being contacted by the team
// To submit this form, please consent to being contacted

// Submit

// Message Sent!
// Thanks for completing the form. We'll be in touch soon!
