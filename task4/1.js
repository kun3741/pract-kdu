const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInputArray(callback) {
    let inputArray = [];
    let count = 0;

    function askForNumber() {
        if (inputArray.length < 10) {
            rl.question(`Введіть число №${inputArray.length + 1}: `, (input) => {
                let number = parseInt(input);
                if (!isNaN(number) && Math.abs(number) < 8 && Math.abs(number) > 3) {
                    inputArray.push(number);
                } else {
                    console.log("Число не відповідає умовам, спробуйте ще раз.");
                }
                count++;
                askForNumber();
            });
        } else {
            callback(inputArray);
        }
    }

    askForNumber();
}

function processArray(inputArray, variant) {
    if (variant % 2 !== 0) {
        inputArray.sort((a, b) => a - b);
        console.log("Впорядкований масив:", inputArray);
    } else {
        let max = Math.max(...inputArray);
        let min = Math.min(...inputArray);
        console.log("Максимум:", max, "Мінімум:", min);
    }
}

function calculateStats(inputArray) {
    let positiveSum = 0;
    let positiveCount = 0;
    let negativeProduct = 1;
    let negativeCount = 0;
    let totalSum = 0;

    inputArray.forEach(number => {
        if (number > 0) {
            positiveSum += number;
            positiveCount++;
        } else if (number < 0) {
            negativeProduct *= number;
            negativeCount++;
        }
        totalSum += number;
    });

    let average = totalSum / inputArray.length;

    console.log(`Сума додатніх елементів: ${positiveSum}
Кількість додатніх елементів: ${positiveCount} 
Добуток від'ємних елементів: ${negativeProduct}
Кількість від'ємних елементів: ${negativeCount} 
Середнє арифметичне: ${average}
Сума всіх елементів: ${totalSum}
    `);
}


rl.question(`Зверніть увагу!
Умови, яким повиннi задовольняти елементи масивiв:
Цiлi числа, по модулю меншi 8 i бiльшi 3.

Якщо ваш варіант непарний, масив сортується, а якщо парний, знаходяться максимальне та мінімальне значення в масиві.
Введіть ваш варіант: `, (variantInput) => {
    let variant = parseInt(variantInput);
    getInputArray((inputArray) => {
        console.log("Введений масив:", inputArray);
        processArray(inputArray, variant);
        calculateStats(inputArray);
        rl.close();
    });
});
