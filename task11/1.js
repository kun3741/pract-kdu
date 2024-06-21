function findElementsAndProduct(n) {
    let A = [1]; 
    for (let i = 1; i < n; i++) {
        A.push(A[i - 1] / (1 + Math.sqrt(A[i - 1])));
    }
    let product = A.reduce((acc, val) => acc * val, 1);
    return { elements: A, product: product };
}

const n = 5;
const result = findElementsAndProduct(n);
console.log(`Перші ${n} елементів ряду: ${result.elements}
Добуток перших ${n} елементів: ${result.product}`);
