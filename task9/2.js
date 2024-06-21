class Student {
    constructor(surname, name, specialty, groupNumber) {
        this.surname = surname;
        this.name = name;
        this.specialty = specialty;
        this.groupNumber = groupNumber;
    }
}

const students = [
    new Student('Бабчук', 'Едуард', 'Програмування', 'ІПЗС-23-1'),
    new Student('Петренко', 'Семен', 'Право', 'ПР-23-1'),
    new Student('Захаренко', 'Захар', 'Інженерія', 'ІН-16-5'),
    new Student('Лев', 'Кугут', 'Психологія', 'ПС-24-3'),
    new Student('Чиж', 'Адам', 'Дизайн', 'ДЗ-44-6')
];

function findStudentsWithShortestSurnames(students) {
    if (students.length === 0) {
        return [];
    }

    let minLength = students[0].surname.length;
    for (const student of students) {
        if (student.surname.length < minLength) {
            minLength = student.surname.length;
        }
    }

    return students.filter(student => student.surname.length === minLength);
}

const result = findStudentsWithShortestSurnames(students);

if (result.length > 0) {
    console.log('Студенти з найкоротшими прізвищами:');
    result.forEach(student => {
        console.log(`Прізвище: ${student.surname}, Ім'я: ${student.name}. 
Спеціальність: ${student.specialty}. 
Група: ${student.groupNumber}`);
    });
} else {
    console.log('Студентів не знайдено.');
}
