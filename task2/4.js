const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
console.log('Введіть числа по одному (0 для завершення):');

rl.on('line', (num) => {
    let number = parseInt(num);
    if (number === 0) {
        let sum = 0;
        let count = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > 1 && numbers[i] < 8) {
                sum += numbers[i];
                count++;
            }
        }
        console.log(`Сума чисел в інтервалі (1, 8): ${sum}
Кількість чисел в інтервалі (1, 8): ${count}`);
        rl.close();
    } else {
        numbers.push(number);
    }
});

