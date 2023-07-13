import taskFunctions from "./task";

const displayTasks = (tasks) => {
	clearTasks();
	const listOfTasks = document.querySelector("#listOfTasks");
	for (let task of tasks) {
		let newLi = document.createElement("li");
		newLi.classList.add("tasks");
		let checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.classList.add("checkbox");
		checkbox.setAttribute("id", task.title);
		console.log(taskFunctions.isChecked(task));
		if (taskFunctions.isChecked(task)) {
			checkbox.checked = true;
		}

		newLi.append(checkbox);
		let liText = document.createElement("span");
		liText.textContent = task.title;
		newLi.append(liText);
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
