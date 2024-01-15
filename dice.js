// Dice Roller program

 function rollDice(){
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');

    output = Math.floor(Math.random() * 6) + 1;
    console.log(`${output}`);


 }

