const TasksDOM = (() => {
    let currentProject = document.querySelector('.task-header');
    let currentProjectTasks = document.querySelector('.tasks');
    let currentTasks = [];
    const assignCurrentTasks = project => {
        currentTasks = project.getProject();
    }
    const getTasksOnSite = (projectTasks) => {
        assignCurrentTasks(projectTasks);
        currentProject.innerHTML = "";
        currentProjectTasks.innerHTML = "";
        currentTasks.forEach(task => {
            let taskDisplay = document.createElement('div');
            let taskTitle = document.createElement('div');
            let taskDescription = document.createElement('div');

            taskTitle.textContent = task.getTitle();
            taskDescription.textContent = task.getDescription();

            let addClasses = () => {
                taskDisplay.classList.add('task');
                taskDisplay.classList.add(`priority-${task.getPriority()}`);
                taskTitle.classList.add('task-title');
                taskDescription.classList.add('task-description');
            }

            addClasses();
            taskDisplay.appendChild(taskTitle);
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