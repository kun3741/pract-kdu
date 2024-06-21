class ProgramArchive {
    constructor() {
        this.programs = [];
    }

    addProgram(name, os, size, date) {
        this.programs.push({ name, os, size, date });
    }

    sortByName() {
        this.programs.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
    }

    searchByOS(os) {
        return this.programs.filter(program => program.os.toLowerCase() === os.toLowerCase());
    }

    displayPrograms() {
        this.programs.forEach(program => {
            console.log(`Назва: ${program.name}, ОС: ${program.os}, Розмір: ${program.size} MB, Дата запису: ${program.date}`);
        });
    }
}

class SpecializedProgramArchive extends ProgramArchive {
    constructor() {
        super();
    }

    addProgram(name, os, size, date, developer, version) {
        this.programs.push({ name, os, size, date, developer, version });
    }

    sortByDeveloper() {
        this.programs.sort((a, b) => {
            if (a.developer < b.developer) return -1;
            if (a.developer > b.developer) return 1;
            return 0;
        });
    }

    searchByVersion(version) {
        return this.programs.filter(program => program.version === version);
    }

    displayPrograms() {
        this.programs.forEach(program => {
            console.log(`Назва: ${program.name}, ОС: ${program.os}, Розмір: ${program.size} MB, Дата запису: ${program.date}, Розробник: ${program.developer}, Версія: ${program.version}`);
        });
    }
}

const specializedArchive = new SpecializedProgramArchive();

specializedArchive.addProgram('Program A', 'Windows', 150, '2023-01-01', 'Developer A', '1.0');
specializedArchive.addProgram('Program B', 'Linux', 100, '2023-02-15', 'Developer B', '1.2');
specializedArchive.addProgram('Program C', 'Windows', 200, '2023-03-10', 'Developer A', '1.1');

console.log('Всі спеціалізовані програми:');
specializedArchive.displayPrograms();

specializedArchive.sortByDeveloper();
console.log('\nСпеціалізовані програми після сортування за розробником:');
specializedArchive.displayPrograms();

const version = '1.0';
console.log(`\nСпеціалізовані програми версії ${version}:`);
const programsForVersion = specializedArchive.searchByVersion(version);
programsForVersion.forEach(program => {
    console.log(`Назва: ${program.name}, ОС: ${program.os}, Розмір: ${program.size} MB, Дата запису: ${program.date}, Розробник: ${program.developer}, Версія: ${program.version}`);
});
