import taskFunctions from "./task";
import projectFunctions from "./project";
import displayTasks from "./domDisplayTasks";

const domTaskFunctions = () => {
	const nameOfPage = document.querySelector(".nameOfPage");
	const submitTask = document.querySelector(".submit");
	const modalWindowOverlay = document.querySelector("#modal-overlay");

	submitTask.addEventListener("click", (e) => {
		e.preventDefault();
		const taskTitle = document.querySelector("#title");
		const taskDescription = document.querySelector("#description");
		const taskDate = document.querySelector("#date");
		const taskPriority = document.querySelector("#priority");
		const requiredField = document.querySelector(".requiredField");
		if (taskTitle.value === "") {
			requiredField.textContent = "This field is required.";
		} else {
			if (nameOfPage.textContent === "All") {
				taskFunctions.createNewTask(
					taskTitle.value,
					taskDescription.value,
					taskDate.value,
					taskPriority.value
				);

				displayTasks(taskFunctions.returnTasks());
				taskTitle.value = "";
				taskDescription.value = "";
				taskDate.value = "";
				taskPriority.value = "";
			} else {
				let currProjectIndex = projectFunctions
					.getProjects()
					.indexOf(nameOfPage.textContent);
				taskFunctions.createNewTask(
					taskTitle.value,
					taskDescription.value,
					taskDate.value,
					taskPriority.value,
					currProjectIndex
				);
				const filteredArray = taskFunctions
					.returnTasks()
					.filter((task) => task.projectIndex === currProjectIndex);

				displayTasks(filteredArray);
			}
			taskTitle.value = "";
			taskDescription.value = "";
			taskDate.value = "";
			taskPriority.value = "";
			modalWindowOverlay.style.display = "none";
			requiredField.textContent = "";
		}
	});
};

const checkBoxToggle = () => {
	const checkBoxes = [...document.querySelectorAll(".checkbox")];
	checkBoxes.forEach((box) => {
		let currentTask = taskFunctions
			.returnTasks()
			.filter((task) => task.title === box.id);
		if (box.checked) {
			taskFunctions.setChecked(currentTask[0], true);
		} else if (!box.checked) {
			taskFunctions.setChecked(currentTask[0], false);
		}
	});
};

export default domTaskFunctions;
export { checkBoxToggle };
