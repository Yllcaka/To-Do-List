import { Task } from "../ToDoItem";

const AddTaskDOM = (() => {
    // let currentProjectHeader = document.querySelector('.task-header');
    let FormDisplayed = false;
    let currentProject, refreshDOM;
    let showTaskFormButton = document.querySelector('button#add');
    let addTaskDOM = document.querySelector('#add-new-task');
    let addTaskButtonDOM = document.querySelector('#add-task');
    let form = document.querySelector('.task-container');
    let newTaskValues = Object();

    const events = (() => {
        showTaskFormButton.addEventListener('click', () => {
            addTaskDOM.style.display = FormDisplayed ? "none" : "block";
            showTaskFormButton.textContent = FormDisplayed ? "ADD TASK" : "CLOSE";
            FormDisplayed = !FormDisplayed;
        });
        form.addEventListener('submit', (e) => {

            event.preventDefault();

            let formData = new FormData(e.target);
            Array.from(formData.entries()).forEach(data => console.log(data));
            // console.log(formData.getAll());
            newTaskValues['title'] = formData.get('task-title');
            newTaskValues['description'] = formData.get('task-description');
            newTaskValues['priority'] = formData.get('task-priority');
            newTaskValues['dueDate'] = formData.get('due-date');
            addTask();
            refreshDOM(currentProject);
        });
        const addTask = () => {
            let newTask = Task(newTaskValues['title']);
            newTask.setDescription(newTaskValues['description']);
            newTask.setPriority(newTaskValues['priority']);
            newTask.setDueDate(newTaskValues['dueDate']);
            currentProject.addTaskToProject(newTask);
        }

    })();
    const changeCurrentProject = (project, refreshProject) => {
        currentProject = project;
        refreshDOM = refreshProject;
    }
    return { changeCurrentProject }
})();

export { AddTaskDOM }