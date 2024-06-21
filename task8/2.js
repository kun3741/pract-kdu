const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введіть рядок: ', (input) => {
    const openBrackets = [];
    const closeBrackets = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '[') {
            openBrackets.push(i);
        } else if (input[i] === ']') {
            closeBrackets.push(i);
        }
    }

    console.log(`Кількість відкритих дужок: ${openBrackets.length}
    Позиції відкритих дужок: ${openBrackets.join(', ')}
    Кількість закритих дужок: ${closeBrackets.length}
    Позиції закритих дужок: ${closeBrackets.join(', ')}
    `);

    let balance = true;
    if (openBrackets.length !== closeBrackets.length) {
        balance = false;
    } else {
        const stack = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i] === '[') {
                stack.push('[');
            } else if (input[i] === ']') {
                if (stack.length === 0) {
                    balance = false;
                    break;
                }
                stack.pop();
            }
        }
        if (stack.length !== 0) {
            balance = false;
        }
    }

    if (balance) {
        console.log('Баланс дужок правильний.');
    } else {
        console.log('Баланс дужок неправильний.');
    }

    if (openBrackets.length === 0 && closeBrackets.length === 0) {
        console.log('У рядку немає квадратних дужок.');
    }

    rl.close();
});
