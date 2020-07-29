/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DOM/AddTaskDOM.js":
/*!*******************************!*\
  !*** ./src/DOM/AddTaskDOM.js ***!
  \*******************************/
/*! exports provided: AddTaskDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTaskDOM\", function() { return AddTaskDOM; });\n/* harmony import */ var _ToDoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ToDoItem */ \"./src/ToDoItem.js\");\n\n\nconst AddTaskDOM = (() => {\n    // let currentProjectHeader = document.querySelector('.task-header');\n    let FormDisplayed = false;\n    let currentProject, refreshDOM;\n    let showTaskFormButton = document.querySelector('button#add');\n    let addTaskDOM = document.querySelector('#add-new-task');\n    // let addTaskContainerDOM = document.querySelector('.task-container');\n    let taskTitleDOM = document.querySelector('#task-title');\n    let taskDescriptionDOM = document.querySelector('#task-description');\n    let taskPriorityDOM = document.querySelector('#task-priority');\n    let addTaskButtonDOM = document.querySelector('#add-task');\n    let newTaskValues = Object();\n\n    const events = (() => {\n        showTaskFormButton.addEventListener('click', () => {\n            addTaskDOM.style.display = FormDisplayed ? \"none\" : \"block\";\n            showTaskFormButton.textContent = FormDisplayed ? \"ADD\" : \"CLOSE\";\n            FormDisplayed = !FormDisplayed;\n        });\n        addTaskButtonDOM.addEventListener('click', () => {\n            newTaskValues['title'] = taskTitleDOM.value;\n            newTaskValues['description'] = taskDescriptionDOM.value;\n            newTaskValues['priority'] = taskPriorityDOM.value;\n            addTask();\n            refreshDOM(currentProject);\n            console.log(refreshDOM);\n        });\n        const addTask = () => {\n            let newTask = Object(_ToDoItem__WEBPACK_IMPORTED_MODULE_0__[\"Task\"])(newTaskValues.title);\n            newTask.setDescription(newTaskValues.description);\n            newTask.setPriority(newTaskValues['priority']);\n            currentProject.addTaskToProject(newTask);\n\n            console.log(currentProject.getProject());\n        }\n\n    })();\n    const changeCurrentProject = (project, refreshProject) => {\n        currentProject = project;\n        refreshDOM = refreshProject;\n    }\n    return { changeCurrentProject }\n})();\n\n\n\n//# sourceURL=webpack:///./src/DOM/AddTaskDOM.js?");

/***/ }),

/***/ "./src/DOM/ProjectDOM.js":
/*!*******************************!*\
  !*** ./src/DOM/ProjectDOM.js ***!
  \*******************************/
/*! exports provided: ProjectDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectDOM\", function() { return ProjectDOM; });\nconst ProjectDOM = (() => {\n    let projects = [];\n    let currentProjectHeader = document.querySelector('.task-header');\n    let projectsDOM = document.querySelector('.projects');\n    const changeCurrentProjectTitle = (project) => {\n        let currentProjectTitleDOM = document.createElement('h2');\n        currentProjectTitleDOM.textContent = project.getProjectName();\n        currentProjectHeader.textContent = \"\";\n        currentProjectHeader.appendChild(currentProjectTitleDOM);\n    }\n    const allProjectsDOM = (allProjects, action) => {\n        projects = allProjects;\n\n        projects.forEach(project => {\n\n            let projectDOM = document.createElement('div');\n            let projectTitleDOM = document.createElement('h2');\n\n            projectTitleDOM.textContent = project.getProjectName();\n            projectDOM.classList.add('project');\n            projectDOM.appendChild(projectTitleDOM);\n            projectDOM.addEventListener('click', () => {\n                action(project);\n                changeCurrentProjectTitle(project);\n            });\n            projectsDOM.appendChild(projectDOM);\n        });\n    }\n    return { allProjectsDOM }\n})();\n\n\n\n//# sourceURL=webpack:///./src/DOM/ProjectDOM.js?");

/***/ }),

/***/ "./src/DOM/TasksDOM.js":
/*!*****************************!*\
  !*** ./src/DOM/TasksDOM.js ***!
  \*****************************/
/*! exports provided: TasksDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TasksDOM\", function() { return TasksDOM; });\nconst TasksDOM = (() => {\n    let currentProjectHeader = document.querySelector('.task-header');\n    let currentProjectTasks = document.querySelector('.tasks');\n    let currentTasks = [];\n    let currentProject;\n    const assignCurrentTasks = project => {\n        currentTasks = project.getProject();\n        currentProject = project;\n    }\n    const getTasksOnSite = (projectTasks) => {\n        assignCurrentTasks(projectTasks);\n        currentProject.innerHTML = \"\";\n        currentProjectTasks.innerHTML = \"\";\n        currentTasks.forEach(task => {\n\n            let taskDisplay = document.createElement('div');\n            let taskTitle = document.createElement('div');\n            let taskDescription = document.createElement('div');\n            currentProjectHeader.textContent = currentProject.getProjectName();\n            taskTitle.textContent = task.getTitle();\n            taskDescription.textContent = task.getDescription();\n\n            let addClasses = () => {\n                taskDisplay.classList.add('task');\n                taskDisplay.classList.add(`priority-${task.getPriority()}`);\n                taskTitle.classList.add('task-title');\n                taskDescription.classList.add('task-description');\n            }\n\n            addClasses();\n            taskDisplay.appendChild(taskTitle);\n            taskDisplay.appendChild(taskDescription);\n            currentProjectTasks.appendChild(taskDisplay);\n        });\n    }\n    return { getTasksOnSite }\n})();\n\n{/* <div class=\"task priority-low\">\n                    <div class=\"task-title\">\n                        [Task Name]\n                    </div>\n                    <div class=\"task-description\">\n                        [Task Description]\n                        <div class=\"due-date-content\">\n                            Due Date: <span class=\"due-date\">01/01/2001</span>\n                        </div>\n                    </div>\n                </div> */}\n\n\n//# sourceURL=webpack:///./src/DOM/TasksDOM.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\nconst Project = (projectName) => {\n    let projectTasks = [];\n    const addTaskToProject = (task) => projectTasks.push(task);\n    const deleteTaskFromProject = (task) => {\n        projectTasks.splice(projectTasks.indexOf(task), 1);\n    }\n    const getProject = () => projectTasks;\n    const getProjectName = () => projectName;\n    return {\n        addTaskToProject, deleteTaskFromProject,\n        getProject, getProjectName\n    }\n};\n\n\n\n//# sourceURL=webpack:///./src/Project.js?");

/***/ }),

/***/ "./src/ToDoItem.js":
/*!*************************!*\
  !*** ./src/ToDoItem.js ***!
  \*************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n// import { format } from 'date-fns';\n\nconst Task = (title = \"Task\") => {\n    let priority = \"high\";\n    let description = \"No Description...\";\n    let date = new Date();\n    // let dueDate = format(date, \"This is due for MM/DD/YYYY\");\n    const getDescription = () => description;\n    const setDescription = (newDescription) => description = newDescription;\n    const setTitle = (newTitle) => title = newTitle;\n    const getTitle = () => title;\n    const setPriority = (newPriority) => priority = newPriority;\n    const getPriority = () => priority;\n\n    const getTask = () => {\n        console.log(priority);\n        console.log(title);\n        console.log(description);\n    }\n\n    return {\n        setTitle, setDescription,\n        getTask, getTitle, getDescription,\n        getPriority, setPriority\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/ToDoItem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToDoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoItem */ \"./src/ToDoItem.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _DOM_ProjectDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/ProjectDOM */ \"./src/DOM/ProjectDOM.js\");\n/* harmony import */ var _DOM_TasksDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM/TasksDOM */ \"./src/DOM/TasksDOM.js\");\n/* harmony import */ var _DOM_AddTaskDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/AddTaskDOM */ \"./src/DOM/AddTaskDOM.js\");\n\n\n\n\n\n\nvar firstProject = Object(_Project__WEBPACK_IMPORTED_MODULE_1__[\"Project\"])('First Project');\nvar secondProject = Object(_Project__WEBPACK_IMPORTED_MODULE_1__[\"Project\"])('Second Project');\nvar currentProject = firstProject;\nvar Projects = [firstProject, secondProject];\n\n\n\n\nconst changeProject = (project) => {\n\n    currentProject = project;\n    _DOM_TasksDOM__WEBPACK_IMPORTED_MODULE_3__[\"TasksDOM\"].getTasksOnSite(currentProject);\n    _DOM_AddTaskDOM__WEBPACK_IMPORTED_MODULE_4__[\"AddTaskDOM\"].changeCurrentProject(currentProject, _DOM_TasksDOM__WEBPACK_IMPORTED_MODULE_3__[\"TasksDOM\"].getTasksOnSite);\n}\n\n\n// var lista = [\n//     Task(\"E para\"),\n//     Task(\"E dyta\"),\n//     Task(\"E treta\"),\n//     Task(\"E katerta\")\n// ]\n// lista.forEach((item, index) => {\n//     item.setDescription(`This is Task number ${index}`);\n//     firstProject.addTaskToProject(item);\n//     item.setPriority('high');\n//     console.log(index);\n//     if (index % 3 == 0) firstProject.deleteTaskFromProject(item);\n// });\n\n// TasksDOM.getTasksOnSite(currentProject);\n_DOM_AddTaskDOM__WEBPACK_IMPORTED_MODULE_4__[\"AddTaskDOM\"].changeCurrentProject(currentProject, _DOM_TasksDOM__WEBPACK_IMPORTED_MODULE_3__[\"TasksDOM\"].getTasksOnSite);\n// firstProject.getProject();\n\n\n_DOM_ProjectDOM__WEBPACK_IMPORTED_MODULE_2__[\"ProjectDOM\"].allProjectsDOM(Projects, changeProject);\n\n_DOM_TasksDOM__WEBPACK_IMPORTED_MODULE_3__[\"TasksDOM\"].getTasksOnSite(firstProject);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });