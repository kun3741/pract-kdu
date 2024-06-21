const fs = require('fs');
const path = require('path');

class Record {
    constructor(month, workshop, professionName, professionCode, normHours, actualHours) {
        this.month = month;
        this.workshop = workshop;
        this.professionName = professionName;
        this.professionCode = professionCode;
        this.normHours = normHours;
        this.actualHours = actualHours;
    }
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function saveToFile(filename, data) {
    fs.writeFileSync(filename, data);
}

function processAndOutputResults(records, outputFilename) {
    const summaryByProfession = {};
    let totalNormHours = 0;
    let totalActualHours = 0;

    records.forEach(record => {
        if (!summaryByProfession[record.professionCode]) {
            summaryByProfession[record.professionCode] = {
                professionName: record.professionName,
                normHours: 0,
                actualHours: 0
            };
        }
        summaryByProfession[record.professionCode].normHours += record.normHours;
        summaryByProfession[record.professionCode].actualHours += record.actualHours;
        totalNormHours += record.normHours;
        totalActualHours += record.actualHours;
    });

    let output = 'Підсумки по професіях:\n';
    for (const code in summaryByProfession) {
        const summary = summaryByProfession[code];
        const normCompletion = ((summary.actualHours / summary.normHours) * 100).toFixed(2);
        output += `Професія: ${summary.professionName} (Код: ${code})\n`;
        output += ` - Нормогодини: ${summary.normHours}\n`;
        output += ` - Фактичні години: ${summary.actualHours}\n`;
        output += ` - Виконання норми: ${normCompletion}%\n`;
    }

    const totalNormCompletion = ((totalActualHours / totalNormHours) * 100).toFixed(2);
    output += '\nПідсумки по відомості:\n';
    output += ` - Нормогодини: ${totalNormHours}\n`;
    output += ` - Фактичні години: ${totalActualHours}\n`;
    output += ` - Виконання норми: ${totalNormCompletion}%\n`;

    console.log(output);
    saveToFile(outputFilename, output);
}

rl.question('Скільки записів ви хочете ввести? ', (count) => {
    const recordCount = parseInt(count, 10);
    if (isNaN(recordCount) || recordCount <= 0) {
        console.log('Некоректна кількість записів.');
        rl.close();
        return;
    }

    const records = [];
    let recordsEntered = 0;

    function enterRecordData() {
        rl.question('Введіть місяць: ', (month) => {
            rl.question('Введіть цех: ', (workshop) => {
                rl.question('Введіть назву професії: ', (professionName) => {
                    rl.question('Введіть шифр професії: ', (professionCode) => {
                        rl.question('Введіть нормогодини: ', (normHours) => {
                            rl.question('Введіть фактичні години: ', (actualHours) => {
                                if (!month || !workshop || !professionName || !professionCode || isNaN(normHours) || isNaN(actualHours)) {
                                    console.log('Некоректні дані. Спробуйте ще раз.');
                                    enterRecordData();
                                    return;
                                }

                                const newRecord = new Record(month, workshop, professionName, professionCode, parseFloat(normHours), parseFloat(actualHours));
                                records.push(newRecord);
                                recordsEntered++;

                                console.log(`Запис про професію ${newRecord.professionName} доданий.`);

                                if (recordsEntered < recordCount) {
                                    enterRecordData();
                                } else {
                                    const inputFilename = path.join(__dirname, 'input2.txt');
                                    const outputFilename = path.join(__dirname, 'output2.txt');
                                    saveToFile(inputFilename, records.map(record => JSON.stringify(record)).join('\n'));
                                    processAndOutputResults(records, outputFilename);                                    
                                    rl.close();
                                }
                            });
                        });
                    });
                });
            });
        });
    }

    enterRecordData();
});
