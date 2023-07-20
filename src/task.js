const taskFunctions = (() => {
	let taskList = new Array();
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
		task.checked = false;
		task.projectIndex = projectIndex;
		taskList.push(task);
		adjustLocalStorage();
	};

	const returnTasks = () => taskList;

	const deleteTask = (task) => {
		let index = taskList.indexOf(task);
		taskList.splice(index, 1);
		adjustLocalStorage();
	};

	const editTask = (task, title, description, dueDate, priority) => {
		task.title = title;
		task.description = description;
		task.dueDate = dueDate;
		task.priority = priority;
		console.log(taskList);
		adjustLocalStorage();
	};

	const isChecked = (task) => {
		if (task.checked) {
			return true;
		}
		return false;
	};

	const setChecked = (task, boolean) => {
		task.checked = boolean;
	};

	const adjustLocalStorage = () => {
		if (localStorage != null) {
			localStorage.removeItem("tasks");
		}
		console.log(JSON.stringify(taskList));
		localStorage.setItem("tasks", JSON.stringify(taskList));
	};

	const initializeTasksFromStorage = () => {
		taskList = JSON.parse(localStorage.getItem("tasks"));
	};

	return {
		createNewTask,
		returnTasks,
		deleteTask,
		editTask,
		isChecked,
		setChecked,
		editTask,
		initializeTasksFromStorage,
	};
})();

export default taskFunctions;
