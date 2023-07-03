const displayTasks = (tasks) => {
	clearTasks();
	const listOfTasks = document.querySelector("#listOfTasks");
	for (let task of tasks) {
		let newLi = document.createElement("li");
		newLi.textContent = task.title;
		listOfTasks.append(newLi);
	}
};

const clearTasks = () => {
	const taskList = document.querySelector("#taskList");
	const ulTasks = document.querySelector("#listOfTasks");
	if (ulTasks) {
		taskList.removeChild(ulTasks);
	}
	const newUl = document.createElement("ul");
	newUl.id = "listOfTasks";
	taskList.append(newUl);
};

export default displayTasks;
