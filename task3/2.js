const a = 20.3;
const xStart = 0.5;
const xEnd = 2;
const step = 0.1;

function f(x) {
    if (x > 1) {
        return Math.log10(x + 1) / Math.pow(Math.sin(Math.sqrt(Math.abs(a * x))), 2);
    } else {
        return Math.pow(Math.sin(Math.sqrt(Math.abs(a * x))), 2);
    }
}

console.log(' x    |   f(x)   ');
console.log('-----------------');

for (let x = xStart; x <= xEnd; x += step) {
    let fx = f(x);
    console.log(`${x.toFixed(1)} | ${fx.toFixed(5)}`);
}
