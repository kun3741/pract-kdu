const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function maxAbsoluteElement(arr) {
    let maxAbs = Math.abs(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i]) > maxAbs) {
            maxAbs = Math.abs(arr[i]);
        }
    }
    return maxAbs;
}

function sumBetweenFirstTwoPositives(arr) {
    let firstPositiveIndex = -1;
    let secondPositiveIndex = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            if (firstPositiveIndex === -1) {
                firstPositiveIndex = i;
            } else if (secondPositiveIndex === -1) {
                secondPositiveIndex = i;
                break;
            }
        }
    }

    console.log(`Індекс першого додатного елемента: ${firstPositiveIndex}
Індекс другого додатного елемента: ${secondPositiveIndex}`);

    if (firstPositiveIndex !== -1 && secondPositiveIndex !== -1) {
        let sum = 0;
        for (let i = firstPositiveIndex + 1; i < secondPositiveIndex; i++) {
            sum += arr[i];
        }
        return sum;
    } else {
        return 0;
    }
}

rl.question('Введіть масив дійсних чисел, розділених пробілом: ', (input) => {
    let array = input.split(' ').map(Number);
    let maxAbsElement = maxAbsoluteElement(array);
    let sumBetweenPositives = sumBetweenFirstTwoPositives(array);

    console.log(`Максимальний за модулем елемент масиву: ${maxAbsElement}
Сума елементів між першим і другим додатними елементами: ${sumBetweenPositives}`);
    rl.close();
});
