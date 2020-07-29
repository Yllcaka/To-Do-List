import { Task } from './ToDoItem';
import { Project } from './Project';
import { ProjectDOM } from './DOM/ProjectDOM';
import { TasksDOM } from './DOM/TasksDOM';
import { AddTaskDOM } from './DOM/AddTaskDOM';

var firstProject = Project('First Project');
var Projects = [firstProject];




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
AddTaskDOM.changeCurrentProject(firstProject, TasksDOM.getTasksOnSite);
// firstProject.getProject();


ProjectDOM.allProjectsDOM([firstProject]);

TasksDOM.getTasksOnSite(firstProject);
