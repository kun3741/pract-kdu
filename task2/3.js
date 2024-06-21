const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введіть порядковий номер місяця (1-12): ', (month) => {
    let monthNumber = parseInt(month);
    if (monthNumber >= 1 && monthNumber <= 6) {
        console.log('Цей місяць відноситься до першого півріччя.');
    } else if (monthNumber >= 7 && monthNumber <= 12) {
        console.log('Цей місяць відноситься до другого півріччя.');
    } else {
        console.log('Некоректний номер місяця.');
    }
    rl.close();
});
