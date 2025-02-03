import { useState } from "react";
import Button from "./components/Button/Button";
import TextInput from "./components/Form/TextInput";
import "./App.css";

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	queryType: string;
	message: string;
	consent: boolean;
}

function App() {
	const handleSubmit = (e: any) => {
		e.preventdefault();
		const formData = new FormData(e.currentTarget);
		console.log(Object.fromEntries(formData));
	};
	return (
		<>
			<form method="POST" onSubmit={handleSubmit}>
				<h1>Contact Us</h1>
				<div className="row">
					<TextInput type="text" name="First Name" />
					<TextInput type="text" name="Last Name" />
				</div>
				<TextInput type="text" name="Email Address" />
				<div className="error">Please enter a valid email address</div>
				<div className="error">This field is required</div>
				<fieldset>
					<TextInput type="radio" name="Query Type" id="general-enquiry" value="General Enquiry" />
					<TextInput type="radio" name="Query Type" id="support-request" value="Support Request" />
				</fieldset>
				<TextInput type="text" name="Message" />
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
