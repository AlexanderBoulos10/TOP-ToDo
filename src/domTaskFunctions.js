import taskFunctions from "./task";
import projectFunctions from "./project";
import displayTasks from "./domDisplayTasks";

const domTaskFunctions = () => {
	const nameOfPage = document.querySelector(".nameOfPage");
	const submitTask = document.querySelector(".submit");
	const modalWindowOverlay = document.querySelector("#modal-overlay");

	submitTask.addEventListener("click", (e) => {
		e.preventDefault();
		const taskTitle = document.querySelector("#title").value;
		const taskDescription = document.querySelector("#description").value;
		const taskDate = document.querySelector("#date").value;
		const taskPriority = document.querySelector("#priority").value;
		if (nameOfPage.textContent === "All") {
			taskFunctions.createNewTask(
				taskTitle,
				taskDescription,
				taskDate,
				taskPriority
			);
			displayTasks(taskFunctions.returnTasks());
		} else {
			let currProjectIndex = projectFunctions
				.getProjects()
				.indexOf(nameOfPage.textContent);
			taskFunctions.createNewTask(
				taskTitle,
				taskDescription,
				taskDate,
				taskPriority,
				currProjectIndex
			);
			const filteredArray = taskFunctions
				.returnTasks()
				.filter((task) => task.projectIndex === currProjectIndex);
			displayTasks(filteredArray);
		}
		modalWindowOverlay.style.display = "none";
	});
};

export default domTaskFunctions;
