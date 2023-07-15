import domTaskFunctions from "./domTaskFunctions";

const modalPopup = (() => {
	const addTaskButton = document.querySelector(".addTaskButton");
	const modalWindowOverlay = document.querySelector("#modal-overlay");
	const closeModalButton = document.querySelector(".cancel");
	const modal = document.querySelector("#modal");

	const formHeader = document.querySelector(".formHeader");
	const formButtons = document.querySelector(".formButtons");

	const openModal = () => {
		modalWindowOverlay.style.display = "flex";
	};

	const closeModal = () => {
		modalWindowOverlay.style.display = "none";
	};

	addTaskButton.addEventListener("click", () => {
		if (document.querySelector("#modal-content")) {
			modal.removeChild(document.querySelector("#modal-content"));
		}
		const modalContent = document.createElement("div");
		modalContent.setAttribute("id", "modal-content");

		const formHeader = document.createElement("h2");
		formHeader.className = "formHeader";
		formHeader.textContent = "Add Task";
		modalContent.append(formHeader);

		const taskForm = document.createElement("form");

		const titleDisplay = document.createElement("div");
		titleDisplay.classList.add("titleInput");
		const titleLabel = document.createElement("label");
		titleLabel.setAttribute("for", "title");
		titleLabel.textContent = "Title";
		const inputTitle = document.createElement("input");
		inputTitle.type = "text";
		inputTitle.setAttribute("id", "title");
		titleDisplay.appendChild(titleLabel);
		titleDisplay.appendChild(inputTitle);
		taskForm.appendChild(titleDisplay);

		const descriptionDisplay = document.createElement("div");
		descriptionDisplay.classList.add("descriptionInput");
		const descriptionLabel = document.createElement("label");
		descriptionLabel.setAttribute("for", "description");
		descriptionLabel.textContent = "Description";
		const inputDescription = document.createElement("input");
		inputDescription.type = "text";
		inputDescription.setAttribute("id", "description");
		descriptionDisplay.appendChild(descriptionLabel);
		descriptionDisplay.appendChild(inputDescription);
		taskForm.appendChild(descriptionDisplay);

		const dateDisplay = document.createElement("div");
		dateDisplay.classList.add("dateInput");
		const dateLabel = document.createElement("label");
		dateLabel.setAttribute("for", "date");
		dateLabel.textContent = "Due Date";
		const inputDate = document.createElement("input");
		inputDate.type = "date";
		inputDate.setAttribute("id", "date");
		dateDisplay.appendChild(dateLabel);
		dateDisplay.appendChild(inputDate);
		taskForm.appendChild(dateDisplay);

		const priorityDisplay = document.createElement("div");
		priorityDisplay.classList.add("priorityInput");
		const priorityLabel = document.createElement("label");
		priorityLabel.setAttribute("for", "priority");
		priorityLabel.textContent = "Priority";
		const selectPriority = document.createElement("select");
		selectPriority.setAttribute("name", "priority");
		selectPriority.setAttribute("id", "priority");
		const optionLow = document.createElement("option");
		optionLow.textContent = "Low";
		optionLow.setAttribute("value", "low");
		const optionMedium = document.createElement("option");
		optionMedium.textContent = "Medium";
		optionMedium.setAttribute("value", "medium");
		const optionHigh = document.createElement("option");
		optionHigh.textContent = "High";
		optionHigh.setAttribute("value", "high");
		selectPriority.appendChild(optionLow);
		selectPriority.appendChild(optionMedium);
		selectPriority.appendChild(optionHigh);
		priorityDisplay.appendChild(priorityLabel);
		priorityDisplay.appendChild(selectPriority);
		taskForm.appendChild(priorityDisplay);

		const formButtons = document.createElement("div");
		formButtons.classList.add("formButtons");
		const submitBtn = document.createElement("button");
		submitBtn.classList.add("submit");
		submitBtn.textContent = "Submit";
		const cancelButton = document.createElement("button");
		cancelButton.classList.add("cancel");
		cancelButton.textContent = "Cancel";
		formButtons.appendChild(submitBtn);
		formButtons.appendChild(cancelButton);
		// taskForm.appendChild(formButtons);

		modalContent.appendChild(taskForm);
		modalContent.appendChild(formButtons);
		modal.appendChild(modalContent);
		openModal();
		cancelButton.addEventListener("click", () => closeModal());
		domTaskFunctions();
	});
	closeModalButton.addEventListener("click", (e) => {
		e.preventDefault();
		closeModal();
		const inputs = [...document.querySelectorAll("inputs")];
		inputs.forEach((input) => (input.value = ""));
	});

	const infoModal = (task) => {
		if (document.querySelector("#modal-content")) {
			console.log("here");
			modal.removeChild(document.querySelector("#modal-content"));
		}
		const modalContent = document.createElement("div");
		modalContent.setAttribute("id", "modal-content");

		const formHeader = document.createElement("h2");
		formHeader.className = "formHeader";
		formHeader.textContent = "Task Info";
		modalContent.append(formHeader);

		const titleDisplay = document.createElement("div");
		titleDisplay.classList.add("titleInput");
		const titleInput = document.createElement("p");
		titleInput.classList.add("infoInput");
		titleInput.textContent = "Title";
		titleDisplay.appendChild(titleInput);
		const titleContent = document.createElement("p");
		titleContent.setAttribute("id", "title");
		titleContent.textContent = task.title;
		titleDisplay.append(titleContent);
		modalContent.append(titleDisplay);

		const descriptionDisplay = document.createElement("div");
		descriptionDisplay.classList.add("descriptionInput");
		const descriptionInput = document.createElement("p");
		descriptionInput.classList.add("infoInput");
		descriptionInput.textContent = "Description";
		descriptionDisplay.appendChild(descriptionInput);
		const descriptionContent = document.createElement("p");
		descriptionContent.setAttribute("id", "description");
		descriptionContent.textContent = task.description;
		descriptionDisplay.append(descriptionContent);
		modalContent.append(descriptionDisplay);

		const dateDisplay = document.createElement("div");
		dateDisplay.classList.add("dateInput");
		const dateInput = document.createElement("span");
		dateInput.classList.add("infoInput");
		dateInput.textContent = "Due Date";
		dateDisplay.appendChild(dateInput);
		const dateContent = document.createElement("p");
		dateContent.setAttribute("id", "date");
		dateContent.textContent = task.dueDate;
		dateDisplay.append(dateContent);
		modalContent.append(dateDisplay);

		const priorityDisplay = document.createElement("div");
		priorityDisplay.classList.add("priorityInput");
		const priorityInput = document.createElement("p");
		priorityInput.classList.add("infoInput");
		priorityInput.textContent = "Priority";
		priorityDisplay.appendChild(priorityInput);
		const priorityContent = document.createElement("p");
		priorityContent.setAttribute("id", "date");
		priorityContent.textContent = task.priority;
		priorityDisplay.append(priorityContent);
		modalContent.append(priorityDisplay);

		const buttonDiv = document.createElement("div");
		buttonDiv.classList.add("formButtons");
		const cancelButton = document.createElement("button");
		cancelButton.classList.add("cancel");
		cancelButton.textContent = "Close";
		buttonDiv.append(cancelButton);
		modalContent.appendChild(buttonDiv);

		modal.append(modalContent);
		console.log(modal);
		openModal();

		cancelButton.addEventListener("click", () => closeModal());
	};

	const editModal = () => {
		formHeader.textContent = "Edit Task";
	};

	return { infoModal, editModal, closeModal };
})();

export default modalPopup;
