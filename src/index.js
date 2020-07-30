import { Task } from './ToDoItem';
import { Project } from './Project';
import { ProjectDOM } from './DOM/ProjectDOM';
import { TasksDOM } from './DOM/TasksDOM';
import { AddTaskDOM } from './DOM/AddTaskDOM';

var firstProject = Project('First Project');
var secondProject = Project('Second Project');
var currentProject = firstProject;
var Projects = [firstProject, secondProject];




const changeProject = (project) => {
    currentProject = project;
    TasksDOM.getTasksOnSite(currentProject);
    AddTaskDOM.changeCurrentProject(currentProject, TasksDOM.getTasksOnSite);
}


AddTaskDOM.changeCurrentProject(currentProject, TasksDOM.getTasksOnSite);



ProjectDOM.allProjectsDOM(Projects, changeProject);
