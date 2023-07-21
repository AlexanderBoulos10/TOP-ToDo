import taskFunctions from "./task";

const projectFunctions = (() => {
	let projectList = new Array();

	const createNewProject = (name) => {
		projectList.push(name);
		adjustLocalStorage();
	};

	const deleteProject = (project) => {
		let index = projectList.indexOf(project);
		projectList.splice(index, 1);
		adjustLocalStorage();
	};

	const getProjects = () => projectList;

	const adjustLocalStorage = () => {
		if (localStorage != null) {
			localStorage.removeItem("projects");
		}
		localStorage.setItem("projects", JSON.stringify(projectList));
		console.log(localStorage.getItem("projects"));
	};

	const initializeProjectsFromStorage = () => {
		projectList = JSON.parse(localStorage.getItem("projects"));
	};

	return {
		createNewProject,
		deleteProject,
		getProjects,
		initializeProjectsFromStorage,
	};
})();

export default projectFunctions;
