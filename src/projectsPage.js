const projectPage = () => {
	const newProjectButton = document.querySelector(".addProject");
	const projectList = document.querySelector(".listOfProjects");
	newProjectButton.addEventListener("click", () => {
		const projectNameInput = prompt("Enter the name of your Project:");
	});
};

export default projectPage;
