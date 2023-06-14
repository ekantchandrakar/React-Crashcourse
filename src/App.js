import { useState } from "react";
import "./App.css";

function App() {
	const [textColor, setTextColor] = useState("black");

	const clickHandler = () => {
		setTextColor(textColor === "black" ? "red" : "black");
	};

	return (
		<div className="App">
			<button onClick={clickHandler}>Show/Hide</button>
			<h1 style={{ color: textColor }}>Hii My Name is Something.</h1>
		</div>
	);
}

export default App;
