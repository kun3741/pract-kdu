const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateMatrix() {
    const matrix = [];
    for (let i = 0; i < 10; i++) {
        const row = [];
        for (let j = 0; j < 10; j++) {
            row.push(Math.floor(Math.random() * 100)); 
        }
        matrix.push(row);
    }
    return matrix;
}

function countMultiplesOfFive(row) {
    return row.filter(num => num % 5 === 0).length;
}

function maxMultiplesCount(matrix) {
    let maxCount = 0;
    for (let i = 0; i < matrix.length; i++) {
        const count = countMultiplesOfFive(matrix[i]);
        if (count > maxCount) {
            maxCount = count;
        }
    }
    return maxCount;
}

const matrix = generateMatrix();
console.log("Згенерована матриця:");
matrix.forEach(row => console.log(row.join(' ')));

const maxCount = maxMultiplesCount(matrix);
console.log("Максимальна кількість елементів, кратних п'яти в рядку:", maxCount);

rl.close();
