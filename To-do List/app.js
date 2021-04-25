let input = prompt("What do you want to do");
const todos = ['Collect Chicken Eggs', 'Be Happy']



while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('sneh')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('Ok enter an index to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown Index')
        }


    }
    input = prompt("What do you want to do");
}
console.log("You Quit");
