class Client {
    constructor(day, month, year, surname) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.surname = surname;
    }
}

const clients = [
    new Client(15, 3, 1990, 'Паньків'),
    new Client(20, 6, 1985, 'Іваненко'),
    new Client(5, 12, 2000, 'Петренко'),
    new Client(17, 8, 1995, 'Паньків'),
    new Client(22, 10, 1988, 'Сидоренко'),
    new Client(9, 4, 1992, 'Коваленко'),
    new Client(13, 1, 1999, 'Паньків')
];

function findClientsBySurname(surname) {
    return clients.filter(client => client.surname === surname);
}

const result = findClientsBySurname('Паньків');

if (result.length > 0) {
    console.log('Клієнти з прізвищем "Паньків":');
    result.forEach(client => {
        console.log(`Дата народження: ${client.day}.${client.month}.${client.year}.
Прізвище: ${client.surname}`);
    });
} else {
    console.log('Клієнтів з прізвищем "Паньків" не знайдено.');
}
