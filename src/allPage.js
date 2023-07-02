import taskFunctions from "./task";

const allTasks = (() => {
	const allTasks = document.querySelector(".all");
	allTasks.addEventListener("click", () => {
		console.log("clicked");
		taskFunctions.returnTasks().forEach((task) => console.log(task));
	});
})();
