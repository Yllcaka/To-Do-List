import { Project } from '../Project';
import { ProjectDOM } from './ProjectDOM';
import { Projects } from '../index';
const AddProjectDOM = (() => {
    let FormDisplayed = false;
    let showFormButton = document.querySelector('#add-project-button');
    let addProjectForm = document.querySelector('#add-new-project');
    const events = (() => {
        showFormButton.addEventListener('click', () => {
            addProjectForm.style.display = FormDisplayed ? "none" : "block";
            FormDisplayed = !FormDisplayed;
        })
        addProjectForm.addEventListener('submit', (e) => {
            event.preventDefault();
            let formData = new FormData(e.target);
            let newProject = Project(formData.get('project-title'));
            console.log(newProject.getProjectName());
            Projects.push(newProject);
            ProjectDOM.allProjectsDOM(Projects, newProject);
        })
    })();
})();

export { AddProjectDOM }