import { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
	const [todoList, setTodoList] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleInputChange = (event) => {
		setNewTask(event.target.value);
	};

	const handleADDTask = () => {
		const task = {
			id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
			taskName: newTask,
			completed: false,
		};

		setTodoList((prevState) => {
			return [...prevState, task];
		});
	};

	const handleTaskDelete = (id) => {
		setTodoList(todoList.filter((task) => task.id !== id));
	};

	const handleCompletedTask = (id) => {
		setTodoList(
			todoList.map((task) => {
				if (task.id === id) {
					return { ...task, completed: true };
				} else {
					return task;
				}
			})
		);
	};

	return (
		<div className="App">
			<div className="addTask">
				<input type="text" onChange={handleInputChange} />
				<button onClick={handleADDTask}>Add Task</button>
			</div>
			<div className="list">
				{todoList.map((task) => {
					return (
						<Task
							key={task.id}
							taskName={task.taskName}
							id={task.id}
							completed={task.completed}
							handleTaskDelete={handleTaskDelete}
							handleCompletedTask={handleCompletedTask}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
