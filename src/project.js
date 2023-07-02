import taskFunctions from "./task";

const projectFunctions = (() => {
	const projectList = [];

	const createNewProject = (name) => {
		const project = {};
		project.name = name;
		projectList.push(project);
		return project;
	};

	const deleteProject = (index) => {
		projectList.splice(index, 1);
	};

	return { createNewProject, deleteProject };
})();

export default projectFunctions;
