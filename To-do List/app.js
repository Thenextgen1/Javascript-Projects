let welcome = prompt("What do you want to do");
let input = "new";
while (true) {
    if (welcome === input) {
        welcome = prompt("Enter new todo");
        let welcome = new welcome;
        console.log(welcome)
    }
}
