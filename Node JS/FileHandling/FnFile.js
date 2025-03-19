// First of all we import the FS Module to interact with the File.

// The File we gona create 

// Now we imagine and structure how our application looks like 

// let's say you give me an command it can be anything

if(command === "add")
{
    addTasks(argumentItCanBe);
}else if(command === "list")
{
    ListTasks();
}else if(command === "remove")
{
    removeTasks(parseInt(argumentItCanBe));
}else{
    console.log("Commad dosen't found");
    
}

// Also learn the process.argv it is an array in Node js which contains command line passed arguments while running the script

console.log(`Arguments:` , process.argv);

// IF I run the file with this node FnFile.js "Ali" "Arif" ali arif are two arguments we pass