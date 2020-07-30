import { Project } from '../Project';
import { ProjectDOM } from './ProjectDOM';
import { Main } from '../MainStuff';
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
            Main.addProject(newProject);
            // ProjectDOM.allProjectsDOM(Projects, newProject);
            // console.log(Projects);
        })
    })();
})();

export { AddProjectDOM }