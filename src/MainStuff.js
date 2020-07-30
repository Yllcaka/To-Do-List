import { Task } from './ToDoItem';
import { Project } from './Project';
import { ProjectDOM } from './DOM/ProjectDOM';
import { TasksDOM } from './DOM/TasksDOM';
import { AddTaskDOM } from './DOM/AddTaskDOM';
import { AddProjectDOM } from './DOM/AddProjectDOM';

const Main = (() => {
    var firstProject = Project('First Project');
    var secondProject = Project('Second Project');
    var currentProject = firstProject;
    var Projects = [firstProject, secondProject];

    const addProject = (newProject) => {
        Projects.push(newProject);
        init();
    }
    const changeProject = (project) => {
        currentProject = project;
        TasksDOM.getTasksOnSite(currentProject);
        AddTaskDOM.changeCurrentProject(currentProject, TasksDOM.getTasksOnSite);
    }
    const init = () => {
        AddTaskDOM.changeCurrentProject(currentProject, TasksDOM.getTasksOnSite);
        ProjectDOM.allProjectsDOM(Projects, changeProject);
    }

    return {
        init, addProject
    }
})();


export { Main }