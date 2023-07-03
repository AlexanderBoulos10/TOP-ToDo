const addTasksWithModal = (() => {
	const openModal = document.querySelector(".addTaskButton");
	const modalWindowOverlay = document.querySelector("#modal-overlay");
	const closeModal = document.querySelector("cancel");

	window.addEventListener("DOMContentLoaded", (event) => {
		openModal.addEventListener("click", () => {
			modalWindowOverlay.style.display = "flex";
		});
		window.addEventListener("DOMContentLoaded", (event) => {
			closeModal.addEventListener("click", () => {
				modalWindowOverlay.style.display = "none";
			});
		});
	});
})();

export default addTasksWithModal;
