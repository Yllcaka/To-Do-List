import { Task } from "../ToDoItem";

const AddTaskDOM = (() => {
    // let currentProjectHeader = document.querySelector('.task-header');
    let FormDisplayed = false;
    let currentProject, refreshDOM;
    let showTaskFormButton = document.querySelector('button#add');
    let addTaskDOM = document.querySelector('#add-new-task');
    // let addTaskContainerDOM = document.querySelector('.task-container');
    let taskTitleDOM = document.querySelector('#task-title');
    let taskDescriptionDOM = document.querySelector('#task-description');
    let taskPriorityDOM = document.querySelector('#task-priority');
    let addTaskButtonDOM = document.querySelector('#add-task');
    let newTaskValues = Object();

    const events = (() => {
        showTaskFormButton.addEventListener('click', () => {
            addTaskDOM.style.display = FormDisplayed ? "none" : "block";
            showTaskFormButton.textContent = FormDisplayed ? "ADD" : "CLOSE";
            FormDisplayed = !FormDisplayed;
        });
        addTaskButtonDOM.addEventListener('click', () => {
            newTaskValues['title'] = taskTitleDOM.value;
            newTaskValues['description'] = taskDescriptionDOM.value;
            newTaskValues['priority'] = taskPriorityDOM.value;
            addTask();
            refreshDOM(currentProject);
            console.log(refreshDOM);
        });
        const addTask = () => {
            let newTask = Task(newTaskValues.title);
            newTask.setDescription(newTaskValues.description);
            newTask.setPriority(newTaskValues['priority']);
            currentProject.addTaskToProject(newTask);

            console.log(currentProject.getProject());
        }

    })();
    const changeCurrentProject = (project, refreshProject) => {
        currentProject = project;
        refreshDOM = refreshProject;
    }
    return { changeCurrentProject }
})();

export { AddTaskDOM }