import projectFunctions from "./project";

const newProjectItem = () => {
	const newProjectButton = document.querySelector(".addProject");
	const projectList = document.querySelector(".listOfProjects");
	const taskButtonDiv = document.querySelector(".addTaskButtonHere");

	newProjectButton.addEventListener("click", () => {
		const projectNameInput = prompt("Enter the name of your Project:");
		projectFunctions.createNewProject(projectNameInput);
		const newProject = document.createElement("li");
		newProject.classList.add("projectItem");
		newProject.textContent = projectNameInput;
		projectList.appendChild(newProject);
	});

	const addTaskButtonDiv = document.querySelector(".addTaskButtonHere");
	const addTaskButton = document.querySelector("addTaskButton");
	if (addTaskButton) {
	}
};

export default newProjectItem;
