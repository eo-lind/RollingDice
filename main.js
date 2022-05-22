// Put your code here

console.log("Let's roll some dice, baby!");
console.log("---------------------------");
console.log("");




const playGame = () => {

    const roll = () => {
        return Math.floor(Math.random() * 6) + 1
    }

    const intToWord = (int) => {
        if (int === 1) {
            return "one"
        } else if (int === 2) {
            return "two"
        } else if (int === 3) {
            return "three"
        } else if (int === 4) {
            return "four"
        } else if (int === 5) {
            return "five"
        } else if (int === 6) {
            return "six"
        }
    }

    const die1 = roll()
    const die2 = roll()
    const totalDiceValue = die1 + die2
    let calculationString = `${intToWord(die1)} + ${intToWord(die2)} = ${totalDiceValue}`
    
    const gotDoubles = () => {
        if (die1 === die2) {
            return calculationString += " DOUBLES!"
        } else {
            return calculationString
        }
    }
    
    console.log(gotDoubles());
}

playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()