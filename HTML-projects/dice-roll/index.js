function rollDice(){
    const input = document.getElementById("inputBox");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < input.value; i++){
        const randomNum = Math.floor(Math.random() * 6) + 1;
        values.push(randomNum);
        images.push(`<img src="images/${randomNum}.png" alt="Dice ${randomNum}">`);
    }

    diceImages.innerHTML = images.join("");
}