import taskFunctions from "./task.js";
import projectFunctions from "./project.js";
import domProjectFunctions from "./projectsPage.js";
import pageLoader from "./pageLoader.js";
import displayTasks from "./domDisplayTasks.js";
import addTasksWithModal from "./modalPopup.js";

taskFunctions.createNewTask("meow", "description", "date", "low", 0);
// // taskFunctions.createNewTask("woof", "vdsfdfbfdvcds", "vswvds", "vsdv", 1);
// taskFunctions.createNewTask(
// 	"HelloDickhead",
// 	"vdsvcds",
// 	"vswvdfvdvds",
// 	"vsdv",
// 	0
// );
// taskFunctions.createNewTask("csvsd", "vdsvcds", "vswvds", "vsdvdfvv");
projectFunctions.initializeProjectsFromStorage();
taskFunctions.initializeTasksFromStorage();
displayTasks(taskFunctions.returnTasks());
domProjectFunctions.displayProjects();
pageLoader();
