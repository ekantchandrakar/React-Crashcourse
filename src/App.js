import "./App.css";
// import styles from "./App.module.css"; // className={styles.name}

function App() {
	const age = 15;
	const isGreen = true;

	return (
		<div className="App">
			{age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
			<h1 style={{ color: isGreen ? "green" : "red" }}>THIS HAS A COLOR</h1>

			{isGreen && <button>THIS IS A BUTTON</button>}
		</div>
	);
}

export default App;
