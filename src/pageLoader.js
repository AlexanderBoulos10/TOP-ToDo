import newProjectItem from "./projectsPage";
import taskFunctions from "./task";
import projectFunctions from "./project";
import displayTasks from "./domDisplayTasks";
import {
	checkBoxToggle,
	infoTaskButton,
	deleteButton,
	editButton,
} from "./domTaskFunctions";

const pageLoader = () => {
	newProjectItem();
	const allTasksButton = document.querySelector(".all");
	const todayTasks = document.querySelector(".today");
	const weekTasks = document.querySelector(".week");
	const completedTasks = document.querySelector(".completed");
	const nameOfPage = document.querySelector(".nameOfPage");

	allTasksButton.addEventListener("click", () => {
		nameOfPage.textContent = "All";
		checkBoxToggle();
		displayTasks(taskFunctions.returnTasks());
		infoTaskButton();
		deleteButton();
		editButton();
	});

	document.body.addEventListener("click", function (event) {
		if (event.target.className == "projectItem") {
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
		}
	});
	infoTaskButton();
	deleteButton();
	editButton();
};

export default pageLoader;
