import { useState } from "react";
import Button from "./components/Button/Button";
import TextInput from "./components/TextInput/TextInput";
import "./App.css";

function App() {
	return (
		<>
			<h1>Contact Form</h1>
			<form>
				<TextInput name="First Name" handleChange={(e) => console.log(e)} />
				<TextInput name="Last Name" handleChange={(e) => console.log(e)} />
				<TextInput name="Email Address" handleChange={(e) => console.log(e)} />
				<TextInput name="Message" handleChange={(e) => console.log(e)} />
				<Button text="Submit" />
			</form>
		</>
	);
}

export default App;
