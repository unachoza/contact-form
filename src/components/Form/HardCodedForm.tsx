import { useState, FormEvent, ChangeEvent } from "react";
import Toast from "../Toast/Toast";
import CheckboxCheck from "../../assets/images/icon-checkbox-check.svg";
import "./HardCodedForm.css";

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	queryType: string;
	message: string;
	consent: boolean | string | null;
}

const INITIAL_FORM_VALUES: FormValues = {
	firstName: "",
	lastName: "",
	email: "",
	queryType: "",
	message: "",
	consent: null,
};

const HardCodedForm = () => {
	const [formValues, setFormValues] = useState<FormValues>(INITIAL_FORM_VALUES);
	const [toastOpen, setToastOpen] = useState<boolean>(false);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [hasConsent, setHasConsent] = useState<boolean>(false);

	const handleUpdate = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.currentTarget;
		setFormValues({ ...formValues, [name]: value });
		console.log({ formValues });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (Object.values(formValues).every((value) => value)) {
			console.log(Object.entries(formValues));
			setIsSubmitted(true);
			setToastOpen(true);
		}
	};

	return (
		<div>
			{isSubmitted && toastOpen ? <Toast /> : null}
			<form onSubmit={(e) => handleSubmit(e)}>
				<h1>Contact Us</h1>
				<div className="form-questions-container">
					<div className="question-container">
						<label htmlFor="firstName">First Name</label>
						<input
							id="firstName"
							type="text"
							name="firstName"
							pattern="[a-zA-Z]{3,}"
							required
							autoFocus
							aria-describedby="firstNameError"
							onBlur={(e) => handleUpdate(e)}
						/>
						<span className="error-message" id="firstNameError">
							This field is required
						</span>
					</div>
					<div className="question-container">
						<label htmlFor="lastName">Last Name</label>
						<input id="lastName" type="text" name="lastName" required aria-describedby="lastNameError" onBlur={(e) => handleUpdate(e)} />
						<span className="error-message" id="lastNameError">
							This field is required
						</span>
					</div>
					<div className="question-container">
						<label htmlFor="email">Email</label>
						<input id="email" type="email" name="email" aria-describedby="emailError" required onBlur={(e) => handleUpdate(e)} />
						<span className="error-message" id="emailError">
							Please enter a valid email address
						</span>
					</div>
					<fieldset role="radiogroup" aria-required="true" aria-describedby="queryError" className="radio-question-container">
						<legend>Query Type</legend>
						<label className="radio-question">
							<input
								id="queryType"
								type="radio"
								name="queryType"
								value="Genery Enquery"
								onBlur={(e) => handleUpdate(e)}
								required
								aria-describedby="queryError"
							/>
							{/* <span role="radio" id="checkBoxInput" aria-checked="false" tabIndex="0" aria-labelledby="chk15-label"></span> */}
							Genery Enquery
						</label>
						{/* <div className="radio-question"> */}
						<label className="radio-question">
							<input
								id="queryType"
								type="radio"
								name="queryType"
								value="supportRequest"
								onBlur={(e) => handleUpdate(e)}
								required
								aria-describedby="queryError"
							/>
							{/* <span role="radio" id="checkBoxInput" aria-checked="false" tabIndex="0" aria-labelledby="chk15-label"></span> */}
							{/* aria-checked */}
							Support Request
						</label>
					</fieldset>
					<span className="error-message" id="queryError">
						Please select a query type
					</span>
					<div className="question-container">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							rows={4}
							cols={10}
							required
							aria-describedby="messageError"
							onBlur={(e) => handleUpdate(e)}
						></textarea>
						<span className="error-message" id="messageError">
							This field is required
						</span>
					</div>
					<div className="question-container checkbox">
						<input id="consent" type="checkbox" name="consent" aria-describedby="consentError" onBlur={(e) => handleUpdate(e)} required />
						{/* //span  */}
						{/* //role= checkbox */}
						{hasConsent && <img src={CheckboxCheck} alt="checked consent" />}
						<label htmlFor="consent">I consent to being contacted by the team</label>
						<div className="error-message" id="consentError">
							To submit this form, please consent to being contacted
						</div>
					</div>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default HardCodedForm;
