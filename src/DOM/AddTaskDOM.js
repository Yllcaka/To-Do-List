import { Task } from "../ToDoItem";

const AddTaskDOM = (() => {
    //The module to add the tasks to the html
    let FormDisplayed = false;
    let currentProject, refreshDOM;
    let showTaskFormButton = document.querySelector('button#add');
    let addTaskDOM = document.querySelector('#add-new-task');
    let addTaskButtonDOM = document.querySelector('#add-task');
    let form = document.querySelector('.task-container');
    let newTaskValues = Object();

    const events = (() => {
        //Stored the modules in the "events" IIFE to differentiate stuff better
        showTaskFormButton.addEventListener('click', () => {
            //open close the add task Form
            addTaskDOM.style.display = FormDisplayed ? "none" : "block";
            showTaskFormButton.textContent = FormDisplayed ? "ADD TASK" : "CLOSE";
            FormDisplayed = !FormDisplayed;
        });
        form.addEventListener('submit', (e) => {
            //prevents the default to get usage of the FormData Object
            event.preventDefault();

            let formData = new FormData(e.target);
            newTaskValues['title'] = formData.get('task-title');
            newTaskValues['description'] = formData.get('task-description');
            newTaskValues['priority'] = formData.get('task-priority');
            newTaskValues['dueDate'] = formData.get('due-date');
            addTask();
            refreshDOM(currentProject);
            //When the task is added the Task Form will close and be clear
            form.reset();
            addTaskDOM.style.display = "none";
            FormDisplayed = false;
            showTaskFormButton.textContent = "ADD TASK";
        });
        const addTask = () => {
            //Where the addition of the task is done
            let newTask = Task(newTaskValues['title']);
            newTask.setDescription(newTaskValues['description']);
            newTask.setPriority(newTaskValues['priority']);
            newTask.setDueDate(newTaskValues['dueDate']);
            currentProject.addTaskToProject(newTask);
        }

    })();
    const changeCurrentProject = (project, refreshProject) => {
        //Change the current working Project
        currentProject = project;
        refreshDOM = refreshProject;
    }
    return { changeCurrentProject }
})();

export { AddTaskDOM }