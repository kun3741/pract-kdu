const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Введіть прізвище, ім'я та по-батькові: `, (fullName) => {
    const nameParts = fullName.split(' ');

    if (nameParts.length !== 3) {
        console.log(`Будь ласка, введіть прізвище, ім'я та по-батькові через пробіл.`);
        rl.close();
        return;
    }

    let [surname, firstName, patronymic] = nameParts;
    surname = surname.replace(/[ао]/gi, '');
    console.log(`Оброблене прізвище, ім'я та по-батькові: ${surname} ${firstName} ${patronymic}`);

    rl.close();
});
