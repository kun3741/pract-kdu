const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введіть перше ціле число: ', (num1) => {
    rl.question('Введіть друге ціле число: ', (num2) => {
        let a = parseInt(num1);
        let b = parseInt(num2);
        let sum = a + b;
        let q = Math.floor(a / b);
        console.log(`Сума: ${sum}`);
        console.log(`Частка націло: ${q}`);
        rl.close();
    });
});
