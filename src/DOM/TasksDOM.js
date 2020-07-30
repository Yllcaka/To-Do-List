const TasksDOM = (() => {
    let currentProjectHeader = document.querySelector('.task-header');
    let currentProjectTasks = document.querySelector('.tasks');
    let currentTasks = [];
    let currentProject;
    const assignCurrentTasks = project => {
        currentTasks = project.getProject();
        currentProject = project;
    }
    const getTasksOnSite = (projectTasks) => {
        assignCurrentTasks(projectTasks);
        currentProject.innerHTML = "";
        currentProjectTasks.innerHTML = "";
        currentTasks.forEach(task => {

            let taskDisplay = document.createElement('div');
            let taskTitle = document.createElement('div');
            let taskDescription = document.createElement('div');
            let deleteButton = document.createElement('button');
            currentProjectHeader.textContent = currentProject.getProjectName();
            taskTitle.textContent = task.getTitle();
            taskDescription.textContent = task.getDescription();

            deleteButton.textContent = "X";
            deleteButton.classList.add('remove-task');

            const addClasses = (() => {
                taskDisplay.classList.add('task');
                taskDisplay.classList.add(`priority-${task.getPriority()}`);
                taskTitle.classList.add('task-title');
                taskDescription.classList.add('task-description');
            })();
            const events = (() => {
                deleteButton.addEventListener('click', () => {
                    currentProject.deleteTaskFromProject(task);
                    getTasksOnSite(currentProject);
                })
            })();

            // addClasses();
            taskDisplay.appendChild(taskTitle);
            taskTitle.appendChild(deleteButton);
            taskDisplay.appendChild(taskDescription);
            currentProjectTasks.appendChild(taskDisplay);
        });
    }
    return { getTasksOnSite }
})();

{/* <div class="task priority-low">
                    <div class="task-title">
                        [Task Name]
                    </div>
                    <div class="task-description">
                        [Task Description]
                        <div class="due-date-content">
                            Due Date: <span class="due-date">01/01/2001</span>
                        </div>
                    </div>
                </div> */}
export { TasksDOM }