import taskFunctions from "./task.js";
import projectFunctions from "./project.js";
import domProjectFunctions, { domDeleteProject } from "./projectsPage.js";
import pageLoader from "./pageLoader.js";
import displayTasks from "./domDisplayTasks.js";

const allButton = document.querySelector(".all");
const nameOfPage = document.querySelector(".nameOfPage");
const numOfTasks = document.querySelector(".numOfTasks");

projectFunctions.initializeProjectsFromStorage();
taskFunctions.initializeTasksFromStorage();
displayTasks(taskFunctions.returnTasks());
domProjectFunctions.displayProjects();
pageLoader();
allButton.style.backgroundColor = "#3C6E71";
nameOfPage.textContent = "All Tasks";
numOfTasks.textContent = `(${taskFunctions.returnTasks().length})`;
