
const Task = (title = "Task") => {
    //The factory function to build a task
    let priority = "high";
    let description = "No Description...";
    let date = new Date();
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
    const setDueDate = (newDate) => date = newDate;
    const getDueDate = () => date;

    return {
        setTitle, setDescription,
        getTask, getTitle, getDescription,
        getPriority, setPriority,
        setDueDate, getDueDate
    }
}

export { Task }