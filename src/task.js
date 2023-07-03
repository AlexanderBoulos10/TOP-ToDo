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
})();

export default taskFunctions;
