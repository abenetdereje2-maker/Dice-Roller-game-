function rollDice() {
    // 1. Get elements (using the IDs from your updated HTML)
    const diceInput = document.getElementById("diceInput").value;
    const dice_result = document.getElementById("diceResultText");
    const images_continer = document.getElementById("diceImages");
  
    const values = []; // Fixed spelling from 'valuse'
    const images = [];

    for (let i = 0; i < diceInput; i++) {
        // 2. Generate number between 1 and 6
        const radnum = Math.floor(Math.random() * 6) + 1;
        
        values.push(radnum);
        
        // 3. Push the correct <img> tag
        images.push(`<img src="image/${radnum}.png" alt="Dice ${radnum}">`);
    }

    // 4. Update the UI
    dice_result.innerHTML = "Result: " + values.join(", ");
    images_continer.innerHTML = images.join("");
}