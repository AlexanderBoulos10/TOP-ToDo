import domProjectFunctions, { domDeleteProject } from "./projectsPage";
import taskFunctions from "./task";
import projectFunctions from "./project";
import displayTasks from "./domDisplayTasks";
import {
	checkBoxToggle,
	infoTaskButton,
	deleteButton,
	editButton,
} from "./domTaskFunctions";
import { isToday, parseISO, isThisWeek } from "date-fns";

const pageLoader = () => {
	domProjectFunctions.newProjectItem();
	domDeleteProject();

	const taskButton = document.querySelector(".addTaskButton");
	const allTasksButton = document.querySelector(".all");
	const todayTasks = document.querySelector(".today");
	const weekTasks = document.querySelector(".week");
	const completedTasks = document.querySelector(".completed");
	const nameOfPage = document.querySelector(".nameOfPage");

	allTasksButton.addEventListener("click", () => {
		taskButton.style.display = "block";
		nameOfPage.textContent = "All";
		checkBoxToggle();
		displayTasks(taskFunctions.returnTasks());
		infoTaskButton();
		deleteButton();
		editButton();
		domDeleteProject();
	});

	document.body.addEventListener("click", function (event) {
		if (
			event.target.className == "projectItem" ||
			event.target.className == "projectName"
		) {
			taskButton.style.display = "block";
			nameOfPage.textContent = event.target.textContent;
			checkBoxToggle();
			let currProjectIndex = projectFunctions
				.getProjects()
				.indexOf(event.target.textContent);
			const filteredArray = taskFunctions
				.returnTasks()
				.filter((task) => task.projectIndex === currProjectIndex);
			displayTasks(filteredArray);
			infoTaskButton();
			deleteButton();
			editButton();
			domDeleteProject();
		}
	});

	completedTasks.addEventListener("click", () => {
		taskButton.style.display = "none";
		nameOfPage.textContent = "Completed Tasks";
		checkBoxToggle();
		let checkedTasks = taskFunctions
			.returnTasks()
			.filter((task) => task.checked === true);
		displayTasks(checkedTasks);
		const checkBoxes = [...document.querySelectorAll(".checkbox")];
		checkBoxes.forEach((box) => {
			box.addEventListener("click", () => {
				checkBoxToggle();
				checkedTasks = taskFunctions
					.returnTasks()
					.filter((task) => task.checked === true);
				displayTasks(checkedTasks);
			});
		});
		infoTaskButton();
		deleteButton();
		editButton();
		domDeleteProject();
	});

	todayTasks.addEventListener("click", () => {
		taskButton.style.display = "none";
		nameOfPage.textContent = "Due Today";
		checkBoxToggle();
		let today = taskFunctions
			.returnTasks()
			.filter((task) => isToday(parseISO(task.dueDate)) === true);
		displayTasks(today);
		infoTaskButton();
		deleteButton();
		editButton();
		domDeleteProject();
	});

	weekTasks.addEventListener("click", () => {
		taskButton.style.display = "none";
		nameOfPage.textContent = "Due this Week";
		checkBoxToggle();
		let week = taskFunctions
			.returnTasks()
			.filter((task) => isThisWeek(parseISO(task.dueDate)) === true);
		displayTasks(week);
		infoTaskButton();
		deleteButton();
		editButton();
		domDeleteProject();
	});

	infoTaskButton();
	deleteButton();
	editButton();
	domDeleteProject();
};

export default pageLoader;
