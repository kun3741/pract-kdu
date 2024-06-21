function r(x, y, z) {
    return Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 0.5);
}

function t(x, y, z) {
    let rValue = r(x, y, z);
    return 1 - (1 / rValue);
}

const x = 1, y = 2, z = 4;
const rValue = r(x, y, z);
const tValue = t(x, y, z);

console.log(`Значення r(${x}, ${y}, ${z}) = ${rValue}
Значення t(${x}, ${y}, ${z}) = ${tValue}`);
