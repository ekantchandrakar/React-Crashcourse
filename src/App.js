import "./App.css";

const Job = (props) => {
	return (
		<div>
			<h1>{props.name}</h1>
			<h2>{props.position}</h2>
			<h2>{props.salary}</h2>
			<p>{props.company}</p>
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<Job
				name="John"
				position={"Juniour SDE"}
				salary={900000}
				company={"Google"}
			/>
			<Job
				name="Kate"
				position={"SDE - I"}
				salary={1300000}
				company={"Amazon"}
			/>
			<Job
				name="Smith"
				position={"SDE - II"}
				salary={1500000}
				company={"Microsoft"}
			/>
		</div>
	);
}

export default App;
