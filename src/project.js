import taskFunctions from "./task";

const projectFunctions = (() => {
	const projectList = [];

	const createNewProject = (name) => {
		const project = {};
		project.name = name;
		projectList.push(name);
		return project;
	};

	const deleteProject = (index) => {
		projectList.splice(index, 1);
	};

	const getProjects = () => projectList;

	return { createNewProject, deleteProject, getProjects };
})();

export default projectFunctions;
