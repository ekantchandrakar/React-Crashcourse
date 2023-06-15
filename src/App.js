import { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
	const [name, setName] = useState("");
	const [predictedAge, setPredictedAge] = useState({});

	const fetchData = () => {
		Axios.get(`https://api.agify.io?name=${name}`).then((res) => {
			setPredictedAge(res.data);
		});
	};

	return (
		<div className="App">
			<input
				placeholder="Type a name"
				onChange={(event) => setName(event.target.value)}
			/>
			<button onClick={fetchData}>Predict Age</button>

			<h1>Name: {predictedAge?.name}</h1>
			<h1>Predicted Age: {predictedAge?.age}</h1>
			<h1>Predicted count: {predictedAge?.count}</h1>
		</div>
	);
}

export default App;
