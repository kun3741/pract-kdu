const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введіть ваше прізвище: ', (surname) => {
    rl.question('Введіть ваше ім\'я: ', (name) => {
        console.log(`Вітаю, ${surname} ${name}!`);
        rl.close();
    });
});
