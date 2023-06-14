import React from "react";

const Task = (props) => {
	return (
		<div>
			<h1 style={{ color: props.completed ? "red" : "black" }}>
				{props.taskName}
			</h1>
			<button onClick={() => props.handleCompletedTask(props.id)}>
				Completed
			</button>
			<button onClick={() => props.handleTaskDelete(props.id)}>X</button>
		</div>
	);
};

export default Task;
