const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введіть перше число: ', (num1) => {
    rl.question('Введіть друге число: ', (num2) => {
        rl.question('Введіть третє число: ', (num3) => {
            let a = parseInt(num1);
            let b = parseInt(num2);
            let c = parseInt(num3);
            let max = Math.max(a, b, c);
            console.log(`Найбільше число: ${max}`);
            rl.close();
        });
    });
});
