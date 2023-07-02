import taskFunctions from "./task.js";
import projectFunctions from "./project.js";
import allTasks from "./allPage.js";
import projectPage from "./projectsPage.js";

projectPage();
taskFunctions.createNewTask("csvsd", "vdsfdfbfdvcds", "vswvds", "vsdv");
taskFunctions.createNewTask("csvsd", "vdsvcds", "vswvdfvdvds", "vsdv");
taskFunctions.createNewTask("csvsd", "vdsvcds", "vswvds", "vsdvdfvv");

console.log(taskFunctions.returnTasks());
