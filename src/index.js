import taskFunctions from "./task.js";
import projectFunctions from "./project.js";
import pageLoader from "./pageLoader.js";
import displayTasks from "./domDisplayTasks.js";
import addTasksWithModal from "./modalPopup.js";

displayTasks(taskFunctions.returnTasks());
pageLoader();
// taskFunctions.createNewTask("meow", "vdsfdfbfdvcds", "vswvds", "vsdv", 0);
// taskFunctions.createNewTask("woof", "vdsfdfbfdvcds", "vswvds", "vsdv", 1);
// taskFunctions.createNewTask(
// 	"HelloDickhead",
// 	"vdsvcds",
// 	"vswvdfvdvds",
// 	"vsdv",
// 	0
// );
// taskFunctions.createNewTask("csvsd", "vdsvcds", "vswvds", "vsdvdfvv");
