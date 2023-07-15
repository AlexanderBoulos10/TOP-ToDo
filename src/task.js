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
		task.checked = false;
		task.projectIndex = projectIndex;
		taskList.push(task);
	};

	const returnTasks = () => taskList;

	const deleteTask = (task) => {
		let index = taskList.indexOf(task);
		taskList.splice(index, 1);
	};

	const editTask = (task) => {};

	const isChecked = (task) => {
		if (task.checked) {
			return true;
		}
		return false;
	};

	const setChecked = (task, boolean) => {
		task.checked = boolean;
	};

	return {
		createNewTask,
		returnTasks,
		deleteTask,
		editTask,
		isChecked,
		setChecked,
	};
})();

export default taskFunctions;
