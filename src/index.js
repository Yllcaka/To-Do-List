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


// var lista = [
//     Task("E para"),
//     Task("E dyta"),
//     Task("E treta"),
//     Task("E katerta")
// ]
// lista.forEach((item, index) => {
//     item.setDescription(`This is Task number ${index}`);
//     firstProject.addTaskToProject(item);
//     item.setPriority('high');
//     console.log(index);
//     if (index % 3 == 0) firstProject.deleteTaskFromProject(item);
// });

// TasksDOM.getTasksOnSite(currentProject);
AddTaskDOM.changeCurrentProject(currentProject, TasksDOM.getTasksOnSite);
// firstProject.getProject();


ProjectDOM.allProjectsDOM(Projects, changeProject);

TasksDOM.getTasksOnSite(firstProject);
