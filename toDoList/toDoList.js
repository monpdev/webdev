console.log("CONNECTED!");

var todos = ["Buy Grocery"];

var input = prompt("What would you like to do?");



while(input !== "quit"){
    //handle input
    if(input === "list"){
       listTodos();
    }else if(input === "new"){
        addTodos();
    } else if(input === "delete"){
        deleteTodos();
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}

console.log("You have successfully quitted the app!")




function listTodos(){
    console.log("**********");
    todos.forEach(function(todo,i){
        console.log(i + ":" + todo);
    });
    console.log("**********");
}

function addTodos(){
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
    console.log("New item added.");
}

function deleteTodos(){
    //ask for index of todo to be deleted
    //delete that todo
    var index = prompt("Enter index of todo to be deleted");
    //delete that todo
    //splice()
    todos.splice(index,1);
    console.log("Deleted 1 item.");
}


