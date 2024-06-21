const readline = require('readline');

function generateRandomNumber() {
    return Math.floor(Math.random() * 9) + 1; 
}

function checkAnswer(num1, num2, answer) {
    return num1 * num2 === answer;
}

function startLearn() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function askQuestion() {
        const num1 = generateRandomNumber();
        const num2 = generateRandomNumber();
        const question = `Скільки буде ${num1} на ${num2}? `;

        rl.question(question, (userInput) => {
            const userAnswer = parseInt(userInput);
            if (checkAnswer(num1, num2, userAnswer)) {
                console.log("Молодець! Дуже добре!");
                askQuestion();
            } else {
                console.log("Невірно! Спробуйте знову...");
                askQuestion();
            }
        });
    }

    askQuestion();
}

startLearn();
