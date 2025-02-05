export interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	queryType: string;
	message: string;
	consent: boolean;
}

export const formFields = [
	{
		id: 1,
		name: "firstName",
		type: "text",
		errorMessage: "This field is required",
		label: "First Name",
		pattern: "/^([a-zA-Z0-9]+)$/",
		required: true,
	},
	{
		id: 2,
		name: "lasttName",
		type: "text",
		errorMessage: "This field is required",
		label: "Last Name",
		pattern: "/^([a-zA-Z0-9]+)$/",
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
