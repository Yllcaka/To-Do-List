import { Project } from '../Project';
import { ProjectDOM } from './ProjectDOM';
import { Main } from '../MainStuff';
const AddProjectDOM = (() => {
    //This is the module for addin projects
    let FormDisplayed = false;// if this is false the form will be closed else it will be open
    let showFormButton = document.querySelector('#add-project-button');
    let addProjectForm = document.querySelector('#add-new-project');
    const events = (() => {
        showFormButton.addEventListener('click', () => {
            addProjectForm.style.display = FormDisplayed ? "none" : "block";
            FormDisplayed = !FormDisplayed;
        })
        addProjectForm.addEventListener('submit', (e) => {
            //prevents the default to get usage of the FormData Object
            event.preventDefault();
            let formData = new FormData(e.target);
            let newProject = Project(formData.get('project-title'));
            Main.addProject(newProject);
            FormDisplayed = false;
            addProjectForm.style.display = "none";
        });
    })();
})();

export { AddProjectDOM }