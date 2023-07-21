import taskFunctions from "./task";
import projectFunctions from "./project";
import displayTasks from "./domDisplayTasks";
import modalPopup from "./modalPopup";

const domTaskFunctions = () => {
	const nameOfPage = document.querySelector(".nameOfPage");
	const submitTask = document.querySelector(".submit");
	const modalWindowOverlay = document.querySelector("#modal-overlay");

	const taskTitle = document.querySelector("#title");
	const taskDescription = document.querySelector("#description");
	const taskDate = document.querySelector("#date");
	const taskPriority = document.querySelector("#priority");
	const titleInput = document.querySelector(".titleInput");
	const requiredField = document.createElement("p");
	submitTask.addEventListener("click", () => {
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
			deleteButton();
			editButton();
		}
	});
};

const infoTaskButton = () => {
	const infoTask = [...document.querySelectorAll(".infoTask")];
	infoTask.forEach((info) => {
		info.addEventListener("click", () => {
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

const deleteButton = () => {
	const delButtons = [...document.querySelectorAll(".deleteTask")];
	const listOfTasks = document.querySelector("#listOfTasks");
	delButtons.forEach((button) => {
		button.addEventListener("click", () => {
			let currentTaskName =
				button.parentElement.previousElementSibling.firstChild.id;
			let currentTask = taskFunctions
				.returnTasks()
				.filter((task) => task.title === currentTaskName);
			taskFunctions.deleteTask(currentTask[0]);
			let liTask = button.parentElement.parentElement;
			listOfTasks.removeChild(liTask);
		});
	});
};

const editButton = () => {
	const edtButtons = [...document.querySelectorAll(".editTask")];
	edtButtons.forEach((button) => {
		button.addEventListener("click", () => {
			let currentTaskName =
				button.parentElement.previousElementSibling.firstChild.id;
			let currentTask = taskFunctions
				.returnTasks()
				.filter((task) => task.title === currentTaskName);
			modalPopup.editModal(currentTask[0]);
		});
	});
};

export default domTaskFunctions;
export { checkBoxToggle, infoTaskButton, deleteButton, editButton };
