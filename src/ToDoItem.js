// import { format } from 'date-fns';

const Task = (title = "Task") => {
    let priority = "high";
    let description = "No Description...";
    let date = new Date();
    // let dueDate = format(date, "This is due for MM/DD/YYYY");
    const getDescription = () => description;
    const setDescription = (newDescription) => description = newDescription;
    const setTitle = (newTitle) => title = newTitle;
    const getTitle = () => title;
    const setPriority = (newPriority) => priority = newPriority;
    const getPriority = () => priority;

    const getTask = () => {
        console.log(priority);
        console.log(title);
        console.log(description);
    }

    return {
        setTitle, setDescription,
        getTask, getTitle, getDescription,
        getPriority, setPriority
    }
}

export { Task }