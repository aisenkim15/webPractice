window.setTimeout(function () {
    var todos = ["Buy new Turtle"];

    var input = prompt("What would you like to do?");

    while (input !== "quit") {
        if (input === "list") {
            listTodos();
        }else if (input === "new") {
            var newTodo = prompt("Enter new todo");
            todos.push(newTodo);
        } else if (input === "delete") {
            var index = prompt("Enter index of todo to delte");
            todos.splice(index, 1);
        }
        input = prompt("What would you like to do?");
    }
    console.log("OK you quit the app");
}, 500);

function listTodos() {
    todos.forEach(function (todo, i) {
        console.log("**********")
        console.log(i + ": " + todo);
    });
    console.log("**********")
}