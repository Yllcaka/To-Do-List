import { EditTaskDOM } from './EditTaskDOM';

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
            let taskTitleContent = document.createElement('span');
            let taskDescription = document.createElement('div');
            let deleteButton = document.createElement('button');
            let dueDate = document.createElement('div');
            currentProjectHeader.textContent = currentProject.getProjectName();
            taskTitleContent.textContent = task.getTitle();
            taskDescription.textContent = task.getDescription();
            dueDate.textContent = task.getDueDate();

            deleteButton.textContent = "X";
            deleteButton.classList.add('remove-task');

            const addClasses = (() => {
                taskDisplay.classList.add('task');
                taskDisplay.classList.add(`priority-${task.getPriority()}`);
                taskTitle.classList.add('task-title');
                taskDescription.classList.add('task-description');
                dueDate.classList.add('due-date');
            })();
            const events = (() => {
                let closed = false;
                deleteButton.addEventListener('click', () => {
                    currentProject.deleteTaskFromProject(task);
                    getTasksOnSite(currentProject);
                    closed = true;
                });
                taskDisplay.addEventListener('click', (e) => {
                    if (!closed) {
                        EditTaskDOM.assignTask(task, e.currentTarget);
                    }
                    closed = false;

                })
            })();

            // addClasses();
            taskDisplay.appendChild(taskTitle);
            taskTitle.appendChild(taskTitleContent);
            taskTitle.appendChild(deleteButton);
            taskDisplay.appendChild(taskDescription);
            taskDescription.appendChild(dueDate);
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