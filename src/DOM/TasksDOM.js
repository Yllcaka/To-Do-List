import { EditTaskDOM } from './EditTaskDOM';

const TasksDOM = (() => {
    //Here are the functions that have to do with the html of the Tasks
    let currentProjectHeader = document.querySelector('.task-header');
    let currentProjectTasks = document.querySelector('.tasks');
    let currentTasks = [];
    let currentProject;
    const assignCurrentTasks = project => {
        //Change the current project and tasks
        currentTasks = project.getProject();
        currentProject = project;
    }
    const getTasksOnSite = (projectTasks) => {
        assignCurrentTasks(projectTasks);
        currentProject.innerHTML = "";
        currentProjectTasks.innerHTML = "";
        currentTasks.forEach(task => {
            //This makes all the tasks get shown to the html

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
                //Stored the modules in the "addClasses" IIFE to differentiate stuff better
                taskDisplay.classList.add('task');
                taskDisplay.classList.add(`priority-${task.getPriority()}`);
                taskTitle.classList.add('task-title');
                taskDescription.classList.add('task-description');
                dueDate.classList.add('due-date');
            })();
            const events = (() => {
                //Stored the modules in the "events" IIFE to differentiate stuff better
                let closed = false;
                deleteButton.addEventListener('click', () => {
                    //This deletes the tasks from the current project task list
                    currentProject.deleteTaskFromProject(task);
                    getTasksOnSite(currentProject);
                    closed = true;
                });
                taskDisplay.addEventListener('click', (e) => {
                    //This is to show the editing form
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

export { TasksDOM }