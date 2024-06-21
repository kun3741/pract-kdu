function swapFirstColumnLastRow(matrix) {
    const n = matrix.length;
    if (n === 0) {
        return matrix;
    }

    for (let i = 0; i < n; i++) {
        const temp = matrix[i][0];
        matrix[i][0] = matrix[n - 1][i];
        matrix[n - 1][i] = temp;
    }
    return matrix;
}

const matrix = [
    [123, 456, 789],
    [12, 34, 56],
    [78, 90, 1]
];
console.log("Початкова матриця:");
console.log(matrix);

const swappedMatrix = swapFirstColumnLastRow(matrix);
console.log("Матриця після перестановки:");
console.log(swappedMatrix);

