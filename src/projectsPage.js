import projectFunctions from "./project";
import taskFunctions from "./task";

const domProjectFunctions = (() => {
	const projectList = document.querySelector(".listOfProjects");
	const projectCounter = document.querySelector(".projectCount");
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
			projectCounter.textContent = projectFunctions.getProjects().length;
			domDeleteProject();
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
			projectCounter.textContent = projectFunctions.getProjects().length;
		});
	};

	return { newProjectItem, displayProjects };
})();

const domDeleteProject = () => {
	const projectCounter = document.querySelector(".projectCount");
	const delButton = [...document.querySelectorAll(".deleteProject")];
	delButton.forEach((button) => {
		console.log("yo");
		// console.log(listOfTasks.children);
		button.addEventListener("click", () => {
			const listOfTasks = document.querySelector("#listOfTasks");
			const listOfProjects = document.querySelector(".listOfProjects");
			let currentProject = button.previousElementSibling;
			let projectIndex = projectFunctions
				.getProjects()
				.indexOf(currentProject.textContent);
			projectFunctions.deleteProject(currentProject.textContent);
			projectCounter.textContent = projectFunctions.getProjects().length;
			console.log(currentProject.parentElement);
			console.log(listOfProjects.children);
			listOfProjects.removeChild(currentProject.parentElement);
			const tasksToDelete = taskFunctions
				.returnTasks()
				.filter((task) => task.projectIndex === projectIndex);
			console.log(tasksToDelete);
			tasksToDelete.forEach((task) => {
				console.log("here");
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
