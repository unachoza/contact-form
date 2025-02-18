export const getLabelforInput = (string: string): string => {
	let splitString = string.split(/(?=[A-Z])/);
	let upperCaseString = splitString.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
	let formatedLabel = upperCaseString.join(" ");
	return formatedLabel;
};
