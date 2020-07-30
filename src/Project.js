const Project = (projectName) => {
    let projectTasks = [];
    const addTaskToProject = (task) => projectTasks.push(task);
    const deleteTaskFromProject = (task) => {
        console.log(projectTasks.indexOf(task));
        projectTasks.splice(projectTasks.indexOf(task), 1);

    }
    const getProject = () => projectTasks;
    const getProjectName = () => projectName;
    return {
        addTaskToProject, deleteTaskFromProject,
        getProject, getProjectName
    }
};

export { Project }