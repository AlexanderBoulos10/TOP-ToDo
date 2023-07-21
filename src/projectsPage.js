import projectFunctions from "./project";
import taskFunctions from "./task";

const domProjectFunctions = (() => {
	const projectList = document.querySelector(".listOfProjects");
	const newProjectItem = () => {
		const newProjectButton = document.querySelector(".addProject");

		newProjectButton.addEventListener("click", () => {
			const projectNameInput = prompt("Enter the name of your Project:");
			projectFunctions.createNewProject(projectNameInput);
			const newProject = document.createElement("li");
			newProject.classList.add("projectItem");
			let projectText = document.createElement("span");
			projectText.classList.add("projectName");
			projectText.textContent = projectNameInput;
			newProject.appendChild(projectText);

			const deleteProjectButton = document.createElement("button");
			deleteProjectButton.classList.add("deleteProject");
			deleteProjectButton.textContent = "X";
			newProject.append(deleteProjectButton);
			projectList.appendChild(newProject);
		});
	};

	const displayProjects = () => {
		const projects = projectFunctions.getProjects();
		projects.forEach((project) => {
			const projectItem = document.createElement("li");
			projectItem.classList.add("projectItem");

			let projectText = document.createElement("span");
			projectText.classList.add("projectName");
			projectText.textContent = project;
			projectItem.appendChild(projectText);

			const deleteProjectButton = document.createElement("button");
			deleteProjectButton.classList.add("deleteProject");
			deleteProjectButton.textContent = "X";
			projectItem.append(deleteProjectButton);
			projectList.appendChild(projectItem);
		});
	};

	return { newProjectItem, displayProjects };
})();

const domDeleteProject = () => {
	const delButton = [...document.querySelectorAll(".deleteProject")];
	const listOfTasks = document.querySelector("#listOfTasks");
	delButton.forEach((button) => {
		const listOfProjects = document.querySelector(".listOfProjects");
		console.log(listOfTasks);
		button.addEventListener("click", () => {
			let currentProject = button.previousElementSibling;
			let projectIndex = projectFunctions
				.getProjects()
				.indexOf(currentProject.textContent);
			projectFunctions.deleteProject(currentProject.textContent);
			listOfProjects.removeChild(currentProject.parentElement);
			const tasksToDelete = taskFunctions
				.returnTasks()
				.filter((task) => task.projectIndex === projectIndex);
			console.log(tasksToDelete);
			tasksToDelete.forEach((task) => {
				listOfTasks.childNodes.forEach((child) => {
					console.log(child);
					if (child.firstChild.lastChild.textContent === task.title) {
						listOfTasks.removeChild(child);
					}
				});
				taskFunctions.deleteTask(task);
			});
		});
	});
};

export default domProjectFunctions;
export { domDeleteProject };
