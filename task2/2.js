const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function readNumbers(numbers = []) {
    rl.question('Введіть число (0 для завершення): ', (num) => {
        let number = parseInt(num);
        if (number === 0) {
            let filteredNumbers = numbers.filter(n => n > 1 && n < 8);
            let sum = filteredNumbers.reduce((acc, n) => acc + n, 0);
            console.log(`Сума чисел в інтервалі (1, 8): ${sum}`);
            console.log(`Кількість чисел в інтервалі (1, 8): ${filteredNumbers.length}`);
            rl.close();
        } else {
            readNumbers([...numbers, number]);
        }
    });
}

readNumbers();
