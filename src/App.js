import { useState } from "react";
import "./App.css";

function App() {
	const [showText, setShowText] = useState(true);

	const clickHandler = () => {
		setShowText((prevState) => {
			return !prevState;
		});
	};

	return (
		<div className="App">
			<button onClick={clickHandler}>Show/Hide</button>
			{showText && <h1>Hii My Name is Something.</h1>}
		</div>
	);
}

export default App;
