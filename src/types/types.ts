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
	name: string;
	label: string;
	errorMessage: string;
	pattern?: string;
	autoFocus?: boolean;
	required?: boolean;
}

export const formFields: FormFields[] = [
	{
		id: 1,
		type: "text",
		name: "firstName",
		label: "First Namee",
		errorMessage: "This field is required ",
		// pattern: "[a-zA-Z]{4,}",
		autoFocus: true,
		required: true,
	},
	{
		id: 2,
		name: "lasttName",
		type: "text",
		errorMessage: "This field is required",
		label: "Last Name",
		// pattern: "/^([a-zA-Z0-9]+)$/",
		required: true,
	},
	{
		id: 3,
		name: "email",
		type: "email",
		errorMessage: "Please enter a valid email address",
		label: "Email",
		pattern: "/^([a-zA-Z0-9]+)$/",
		required: true,
	},
];

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
