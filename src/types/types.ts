export interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	queryType: string;
	message: string;
	consent: boolean | null;
}

export interface FormFields {
	id: number;
	type: string;
	label: string;
	name: string;
	value?: string[];
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
		label: "First Name*",
		errorMessage: "This field is required",
		pattern: "[a-zA-Z]{1,}",
		autoFocus: true,
		required: true,
		halfSize: true,
	},
	{
		id: 2,
		type: "text",
		label: "Last Name*",
		name: "lastName",
		errorMessage: "This field is required",
		pattern: "[a-zA-Z]{1,}",
		required: true,
		halfSize: true,
	},
	{
		id: 3,
		type: "email",
		label: "Email*",
		name: "email",
		errorMessage: "Please enter a valid email address",
		pattern: "^[A-Za-z0-9_.]*@[A-Za-z0-9_.]+$",
		required: true,
	},
	{
		id: 4,
		type: "radio",
		label: "Query Type*",
		name: "queryType",
		value: ["generalEnquiry", "supportRequest"],
		errorMessage: "Please select a query type",
		required: true,
		halfSize: true,
	},

	{
		id: 5,
		type: "textarea",
		label: "Message*",
		name: "message",
		errorMessage: "This field is required",
		required: true,
	},
	{
		id: 6,
		type: "checkbox",
		label: "I consent to being contacted by the team*",
		name: "consent",
		errorMessage: "To submit this form, please consent to being contacted",
		required: true,
	},
];
