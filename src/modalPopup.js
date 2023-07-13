const addTasksWithModal = (() => {
	const openModal = document.querySelector(".addTaskButton");
	const modalWindowOverlay = document.querySelector("#modal-overlay");
	const closeModal = document.querySelector(".cancel");

	openModal.addEventListener("click", () => {
		modalWindowOverlay.style.display = "flex";
	});
	closeModal.addEventListener("click", (e) => {
		e.preventDefault();
		console.log("here");
		modalWindowOverlay.style.display = "none";
	});
})();

export default addTasksWithModal;
