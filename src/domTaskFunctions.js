import taskFunctions from "./task";
import projectFunctions from "./project";
import displayTasks from "./domDisplayTasks";
import modalPopup from "./modalPopup";

const domTaskFunctions = () => {
	const nameOfPage = document.querySelector(".nameOfPage");
	const submitTask = document.querySelector(".submit");
	const modalWindowOverlay = document.querySelector("#modal-overlay");
	const editTask = [...document.querySelector(".editTask")];
	const deleteTask = [...document.querySelector(".deleteTask")];

	const taskTitle = document.querySelector("#title");
	const taskDescription = document.querySelector("#description");
	const taskDate = document.querySelector("#date");
	const taskPriority = document.querySelector("#priority");
	const titleInput = document.querySelector(".titleInput");
	const requiredField = document.createElement("p");
	submitTask.addEventListener("click", () => {
		const infoTask = [...document.querySelectorAll(".infoTask")];
		console.log(infoTask);
		if (taskTitle.value === "") {
			requiredField.classList.add("requiredField");
			titleInput.appendChild(requiredField);
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
			if (document.querySelector(".requiredField")) {
				titleInput.removeChild(requiredField);
			}
			modalPopup.closeModal();
			infoTaskButton();
		}
	});
};

const infoTaskButton = () => {
	console.log("here");
	const infoTask = [...document.querySelectorAll(".infoTask")];
	infoTask.forEach((info) => {
		info.addEventListener("click", () => {
			console.log("here");
			let currentTaskName =
				info.parentElement.previousElementSibling.firstChild.id;
			let currentTask = taskFunctions
				.returnTasks()
				.filter((task) => task.title === currentTaskName);

			modalPopup.infoModal(currentTask[0]);
		});
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
export { checkBoxToggle, infoTaskButton };
