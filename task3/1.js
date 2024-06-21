const A = 0;
const B = Math.PI / 2;
const M = 20;

function f(x) {
    return Math.sin(x) - Math.cos(x);
}

const H = (B - A) / M;

for (let i = 0; i <= M; i++) {
    const Xi = A + i * H;
    const Fi = f(Xi);
    console.log(`f(${Xi.toFixed(5)}) = ${Fi.toFixed(5)}`);
}
