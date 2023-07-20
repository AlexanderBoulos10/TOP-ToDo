import projectFunctions from "./project";

const domProjectFunctions = (() => {
	const projectList = document.querySelector(".listOfProjects");
	const newProjectItem = () => {
		const newProjectButton = document.querySelector(".addProject");

		newProjectButton.addEventListener("click", () => {
			const projectNameInput = prompt("Enter the name of your Project:");
			projectFunctions.createNewProject(projectNameInput);
			const newProject = document.createElement("li");
			newProject.classList.add("projectItem");
			newProject.textContent = projectNameInput;
			projectList.appendChild(newProject);
		});
	};

	const displayProjects = () => {
		const projects = projectFunctions.getProjects();
		projects.forEach((project) => {
			const projectItem = document.createElement("li");
			projectItem.classList.add("projectItem");
			projectItem.textContent = project;
			projectList.appendChild(projectItem);
		});
	};

	// const addTaskButtonDiv = document.querySelector(".addTaskButtonHere");
	// const addTaskButton = document.querySelector("addTaskButton");
	// if (addTaskButton) {
	// }

	return { newProjectItem, displayProjects };
})();

export default domProjectFunctions;
