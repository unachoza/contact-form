import { useState } from "react";
import Button from "./components/Button/Button";
import TextInput from "./components/TextInput/TextInput";
import "./App.css";

function App() {
	return (
		<>
			<h1>Contact Form</h1>
			<form>
				<div className="row">
					<TextInput type="text" name="First Name" handleChange={(e) => console.log(e)} />
					<TextInput type="text" name="Last Name" handleChange={(e) => console.log(e)} />
				</div>
				<TextInput type="text" name="Email Address" handleChange={(e) => console.log(e)} />
				<TextInput type="radio" name="Query Type" handleChange={(e) => console.log(e)} />
				<TextInput type="text" name="Message" handleChange={(e) => console.log(e)} />
				<Button text="Submit" />
			</form>
		</>
	);
}

export default App;
