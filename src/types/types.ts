export interface FormValues {
	firstName: string;
	lastName?: string;
	email?: string;
	queryType?: string;
	message?: string;
	consent?: boolean;
}
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

export const formFields: FormFields[] = [
	{
		id: 1,
		type: "text",
		name: "firstName",
		label: "First Namee",
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
		name: "lasttName",
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
	{
		id: 6,
		type: "textarea",
		label: "Message",
		name: "message",
		errorMessage: "This field is required",
		required: true,
	},
	{
		id: 7,
		type: "checkbox",
		label: "I consent to being contacted by the team",
		name: "consent",
		errorMessage: "To submit this form, please consent to being contacted",
		required: true,
	},
];

// Message Sent!
// Thanks for completing the form. We'll be in touch soon!

// const App = () => {
// 	// const [formValue, setFormValues] = useState({
// 	// 	firstName: "",
// 	// 	lastName: "",
// 	// 	email: "",
// 	// 	queryType: "",
// 	// 	message: "",
// 	// 	consent: false,
// 	// });
// 	const [formValues, setFormValues] = useState({
// 		firstName: "",
// 	});

// 	useEffect(() => {
// 		//handleKeyDown
// 	});

// 	const handleInput = (name: string, value: string) => {
// 		setFormValues((prev) => ({
// 			...prev,
// 			[name]: value,
// 		}));
// 	};

// 	const validateForm = () => {
// 		//loop through all values and check if they are required
// 		// if (required && value !== "") {
// 	};

// 	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
// 		e.preventDefault();
// 		// validateForm()
// 		const formData = new FormData(e.currentTarget);
// 		console.log(Object.fromEntries(formData));
// 	};

// 	return (
// 		<>
// 			<form method="POST" onSubmit={handleSubmit}>
// 				<h1>Contact Us Please</h1>
// 				{formFields.map((input) => {
// 					//@ts-ignore
// 					return <FormDataInput key={input.id} value={formValues[input.name]} handleInput={handleInput} label={input.name} />;
// 				})}
// 				{/* <div className="row">
// 					<TextInput name="firstName" handleInput={handleInput} value={formValues.firstName} />
// 					<TextInput name="Last Name" handleInput={handleInput} value={formValues.lastName} />
// 				</div>
// 				//type email
// 				<TextInput name="Email Address" handleInput={handleInput} value={formValues.email} />
// 				<div className="error">Please enter a valid email address</div>
// 				<div className="error">This field is required</div>
// 				<fieldset>
// 					<RadioInput id="general" name="queryType" value="General Enquiry" />
// 					<RadioInput id="support" name="queryType" value="Support Request" />
// 				</fieldset>
// 				<TextInput name="Message" handleInput={handleInput} value={formValues.message} /> */}
// 				<Button text="Submit" />
// 			</form>
// 		</>
// 	);

// export default App;
