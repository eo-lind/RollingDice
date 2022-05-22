// Put your code here

console.log("Let's roll some dice, baby!");
console.log("---------------------------");
console.log("");


const roll = () => {
    return Math.floor(Math.random() * 6) + 1
}

const die1 = roll();
const die2 = roll();

console.log(die1);
console.log(die2);


