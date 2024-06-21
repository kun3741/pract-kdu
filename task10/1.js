const fs = require('fs');
const readline = require('readline');

class Client {
    constructor(day, month, year, surname) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.surname = surname;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const clients = [];

function inputClientData() {
    rl.question('Введіть день народження: ', (day) => {
        rl.question('Введіть місяць народження: ', (month) => {
            rl.question('Введіть рік народження: ', (year) => {
                rl.question('Введіть прізвище: ', (surname) => {
                    const client = new Client(parseInt(day), parseInt(month), parseInt(year), surname);
                    clients.push(client);
                    rl.question('Ввести ще одного клієнта? (так/ні): ', (answer) => {
                        if (answer.toLowerCase() === 'так') {
                            inputClientData();
                        } else {
                            saveClientsToFile();
                            rl.close();
                            const result = findClientsBySurname('Паньків');
                            displayAndSaveResults(result);
                        }
                    });
                });
            });
        });
    });
}

function saveClientsToFile() {
    const data = clients.map(client => `${client.day}.${client.month}.${client.year} - ${client.surname}`).join('\n');
    fs.writeFileSync('clients.txt', data, 'utf8');
    console.log('Дані збережено у файл "clients.txt"');
}

function findClientsBySurname(surname) {
    return clients.filter(client => client.surname === surname);
}

function displayAndSaveResults(results) {
    let output = '';
    if (results.length > 0) {
        console.log('Клієнти з прізвищем "Паньків":');
        output += 'Клієнти з прізвищем "Паньків":\n';
        results.forEach(client => {
            const resultText = `Дата народження: ${client.day}.${client.month}.${client.year}. Прізвище: ${client.surname}`;
            console.log(resultText);
            output += resultText + '\n';
        });
    } else {
        console.log('Клієнтів з прізвищем "Паньків" не знайдено.');
        output += 'Клієнтів з прізвищем "Паньків" не знайдено.\n';
    }
    fs.writeFileSync('results.txt', output, 'utf8');
    console.log('Результати збережено у файл "results.txt"');
}

inputClientData();
