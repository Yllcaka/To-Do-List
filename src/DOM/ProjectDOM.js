const ProjectDOM = (() => {
    //Here all the projects will be shown on the html
    let projects = [];
    let currentProjectHeader = document.querySelector('.task-header');
    let projectsDOM = document.querySelector('.projects');
    const changeCurrentProjectTitle = (project) => {
        let currentProjectTitleDOM = document.createElement('h2');
        currentProjectTitleDOM.textContent = project.getProjectName();
        currentProjectHeader.textContent = "";
        currentProjectHeader.appendChild(currentProjectTitleDOM);
    }
    const allProjectsDOM = (allProjects, action) => {
        projects = allProjects;
        projectsDOM.innerHTML = "";

        projects.forEach(project => {

            let projectDOM = document.createElement('div');
            let projectTitleDOM = document.createElement('h2');

            projectTitleDOM.textContent = project.getProjectName();
            projectDOM.classList.add('project');
            projectDOM.appendChild(projectTitleDOM);
            projectDOM.addEventListener('click', () => {
                action(project);
                changeCurrentProjectTitle(project);
            });
            projectsDOM.appendChild(projectDOM);
        });
    }
    return { allProjectsDOM }
})();

export { ProjectDOM }