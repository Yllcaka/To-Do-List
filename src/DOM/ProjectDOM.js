const ProjectDOM = (() => {
    let projects = [];
    const allProjectsDOM = (allProjects) => {
        projects = allProjects;
        let projectsDOM = document.querySelector('.projects');
        projects.forEach(project => {

            let projectDOM = document.createElement('div');
            let projectTitleDOM = document.createElement('h2');
            projectTitleDOM.textContent = project.getProjectName();
            projectDOM.classList.add('project');
            projectDOM.appendChild(projectTitleDOM);
            projectsDOM.appendChild(projectDOM);
        });
    }
    return { allProjectsDOM }
})();

export { ProjectDOM }