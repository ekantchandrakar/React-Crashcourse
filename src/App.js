import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
	const [excuse, setExcuse] = useState("");

	const fetchExcuseHandler = () => {
		Axios.get("https://excuser-three.vercel.app/v1/excuse/").then((res) => {
			setExcuse(res.data[0].excuse);
		});
	};

	useEffect(() => {
		fetchExcuseHandler();
	}, []);

	return (
		<div className="App">
			<button onClick={fetchExcuseHandler}>Generate Excuse</button>
			<p>{excuse}</p>
		</div>
	);
}

export default App;
