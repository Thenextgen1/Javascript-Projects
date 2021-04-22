let input = prompt("Welcome! enter a Max Number!!");
let attempt = 1;
while (true) {
    let input = prompt("enter your first guess");
    attempt++;
    for (let i = 0; i <= 20; i) {
        if (input == 14 || input === 'q' || input === 'Q') {
            break;
        }
        else if (input <= 10) {
            input = prompt("Too low. Guess Again");
        } else if (input >= 10) {
            input = prompt("Too High. Guess Again");
        }
    }
    break;


}
console.log(`You got it. It took you ${attempt} guesses`);
