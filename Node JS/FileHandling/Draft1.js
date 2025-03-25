const fs = require("fs");
const filePath = "./tasks.json"

const command = process.argv[2];
const argument = process.argv[3];

const loadTask = () => {
   try{
     const dataBuffer = fs.readFileSync(filePath);
     const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
   }catch(error){
      return [];
   }   
}

const saveTask = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath , dataJSON)
}

const addTasks = (task) => {
   const tasks = loadTask();
   tasks.push({task});
   saveTask(tasks);
   console.log("Task add");
}

const listTasks = () => {
    const task = loadTask();
    task.forEach((task,index)=> console.log((index + 1) ,"-" , task.task))
}

const removeTasks = (delTask) => {
    const tasks = loadTask(); // Load the tasks

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].task === delTask) {
            tasks.splice(i, 1); 
            break; 
        }
    }

    console.log(tasks);
};

if(command === "add"){
    addTasks(argument)
}else if(command === "list"){
    listTasks()
}else if(command === "remove"){
    removeTasks(argument)
}else{
    console.log("Command not found!")
}