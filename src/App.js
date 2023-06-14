import { useState } from "react";
import "./App.css";

function App() {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<div className="App">
			<input type="text" onChange={handleInputChange} />
			<p>{inputValue}</p>
		</div>
	);
}

export default App;
