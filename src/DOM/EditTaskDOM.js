const EditTaskDOM = (() => {
    //Here is done the editing of the tasks
    let task, taskDOM;

    let editForm = document.querySelector('#edit-task');
    let editFormTask = document.querySelector('.edit-container');
    let editTitle = editForm.querySelector('#edit-title');
    let editDescription = editForm.querySelector('#edit-description');
    let editPriority = editForm.querySelector('#edit-priority');
    let editDueDate = editForm.querySelector('#edit-due-date');
    let editedTaskValues = Object();


    const assignTask = (newTask, newTaskDOM) => {
        task = newTask;
        taskDOM = newTaskDOM;
        editForm.style.display = "block";
        editTitle.value = task.getTitle();
        editDescription.value = task.getDescription();
        editPriority.value = task.getPriority();
        editDueDate.value = task.getDueDate();
    }
    const editTaskDOM = () => {
        //Editing of the html of the Task
        let taskTitle = taskDOM.querySelector('.task-title span');
        let taskDescription = taskDOM.querySelector('.task-description');
        let dueDate = document.createElement('div');
        dueDate.classList.add('due-date');
        taskTitle.textContent = task.getTitle();
        taskDescription.textContent = task.getDescription();
        taskDescription.appendChild(dueDate);
        dueDate.textContent = task.getDueDate();
        taskDOM.className = "";
        taskDOM.classList.add('task');
        taskDOM.classList.add(`priority-${task.getPriority()}`);
        editForm.style.display = "none";
        editFormTask.reset();
    }
    const events = (() => {
        editForm.addEventListener('submit', (e) => {
            //When the form submission is executed the current Task
            //Will get edited
            event.preventDefault();
            let formData = new FormData(e.target);
            editedTaskValues['title'] = formData.get('task-title');
            editedTaskValues['description'] = formData.get('task-description');
            editedTaskValues['priority'] = formData.get('task-priority');
            editedTaskValues['dueDate'] = formData.get('due-date');

            // Array.from(formData.entries()).forEach(data => console.log(data));
            task.setTitle(editedTaskValues['title']);
            task.setDescription(editedTaskValues['description']);
            task.setPriority(editedTaskValues['priority']);
            task.setDueDate(editedTaskValues['dueDate']);
            console.log(taskDOM);
            editTaskDOM();

        });

    })();

    return { assignTask }
})();

export { EditTaskDOM }