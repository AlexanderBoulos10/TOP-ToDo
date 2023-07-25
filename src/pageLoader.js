import domProjectFunctions, { domDeleteProject } from "./projectsPage";
import taskFunctions from "./task";
import projectFunctions from "./project";
import displayTasks from "./domDisplayTasks";
import {
	checkBoxToggle,
	infoTaskButton,
	deleteButton,
	editButton,
	numOfTasks,
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
	const numOfTasks = document.querySelector(".numOfTasks");

	allTasksButton.addEventListener("click", () => {
		taskButton.style.display = "block";
		nameOfPage.textContent = "All Tasks";
		numOfTasks.textContent = `(${taskFunctions.returnTasks().length})`;
		checkBoxToggle();
		displayTasks(taskFunctions.returnTasks());
		infoTaskButton();
		deleteButton();
		editButton();
		domDeleteProject();
		setColorOfNavWhenClicked();
	});

	document.body.addEventListener("click", function (event) {
		if (
			event.target.className == "projectItem" ||
			event.target.className == "projectName"
		) {
			nameOfPage.textContent = event.target.textContent;
			taskButton.style.display = "block";
			checkBoxToggle();
			let currProjectIndex = projectFunctions
				.getProjects()
				.indexOf(event.target.textContent);
			const filteredArray = taskFunctions
				.returnTasks()
				.filter((task) => task.projectIndex === currProjectIndex);
			numOfTasks.textContent = `(${filteredArray.length})`;
			displayTasks(filteredArray);
			infoTaskButton();
			deleteButton();
			editButton();
			domDeleteProject();
			setColorOfNavWhenClicked();
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
		numOfTasks.textContent = `(${checkedTasks.length})`;
		infoTaskButton();
		deleteButton();
		editButton();
		domDeleteProject();
		setColorOfNavWhenClicked();
	});

	todayTasks.addEventListener("click", () => {
		taskButton.style.display = "none";
		nameOfPage.textContent = "Due Today";
		checkBoxToggle();
		let today = taskFunctions
			.returnTasks()
			.filter((task) => isToday(parseISO(task.dueDate)) === true);
		numOfTasks.textContent = `(${today.length})`;
		displayTasks(today);
		infoTaskButton();
		deleteButton();
		editButton();
		domDeleteProject();
		setColorOfNavWhenClicked();
	});

	weekTasks.addEventListener("click", () => {
		taskButton.style.display = "none";
		nameOfPage.textContent = "Due this Week";
		checkBoxToggle();
		let week = taskFunctions
			.returnTasks()
			.filter((task) => isThisWeek(parseISO(task.dueDate)) === true);
		numOfTasks.textContent = `(${week.length})`;
		displayTasks(week);
		infoTaskButton();
		deleteButton();
		editButton();
		domDeleteProject();
		setColorOfNavWhenClicked();
	});

	infoTaskButton();
	deleteButton();
	editButton();
	domDeleteProject();
	setColorOfNavWhenClicked();
};

const setColorOfNavWhenClicked = () => {
	const sidebar = document.querySelector(".sidebar");
	const sidebarChildren = [...sidebar.children];
	sidebarChildren.forEach((child) => {
		if (child.classList.contains("projects")) {
			return;
		} else {
			child.style.backgroundColor = "#fff";
			child.addEventListener("click", () => {
				child.style.backgroundColor = "#3C6E71";
			});
		}
	});
};

export default pageLoader;
