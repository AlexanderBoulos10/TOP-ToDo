import taskFunctions from "./task";

const displayTasks = (tasks) => {
	clearTasks();
	const listOfTasks = document.querySelector("#listOfTasks");
	for (let task of tasks) {
		let newLi = document.createElement("li");
		newLi.classList.add("tasks");
		let titleBox = document.createElement("div");
		let checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.classList.add("checkbox");
		checkbox.setAttribute("id", task.title);
		if (taskFunctions.isChecked(task)) {
			checkbox.checked = true;
		}

		titleBox.append(checkbox);
		let liText = document.createElement("span");
		liText.textContent = task.title;
		titleBox.append(liText);
		newLi.append(titleBox);

		let restofTaskContent = document.createElement("div");

		let infoButton = document.createElement("button");
		infoButton.classList.add("infoTask");
		infoButton.textContent = "Info";
		restofTaskContent.append(infoButton);

		let editButton = document.createElement("button");
		editButton.classList.add("editTask");
		editButton.textContent = "Edit";
		restofTaskContent.append(editButton);

		let deleteButton = document.createElement("button");
		deleteButton.classList.add("deleteTask");
		deleteButton.textContent = "delete";
		restofTaskContent.append(deleteButton);

		newLi.append(restofTaskContent);
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
