import projectFunctions from "./project";

const taskFunctions = (() => {
	const taskList = [];
	const createNewTask = (
		title,
		description,
		dueDate,
		priority,
		projectIndex
	) => {
		const task = {};
		task.title = title;
		task.description = description;
		task.dueDate = dueDate;
		task.priority = priority;
		task.projectIndex = projectIndex;
		taskList.push(task);
	};

	const returnTasks = () => taskList;

	const deleteTask = () => {};

	const editTask = () => {};

	return { createNewTask, returnTasks, deleteTask, editTask };
	// const taskList = [];
	// class Task {
	// 	contructor(title, description, dueDate, priority) {
	// 		this.title = title;
	// 		this.description = description;
	// 		this.dueDate = dueDate;
	// 		this.priority = priority;
	// 	}

	// }

	// function newTask(title, description, dueDate, priority) {
	// 	const task = new Task(title, description, dueDate, priority);
	// 	console.log(task);
	// 	taskList.push(task);
	// }

	// function getTasks() {
	// 	return taskList;
	// }

	// return { newTask, getTasks };
})();

export default taskFunctions;
