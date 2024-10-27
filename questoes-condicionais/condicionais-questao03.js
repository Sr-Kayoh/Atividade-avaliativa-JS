let somaPares = 0;
let somaImpares = 0;

for (let num = 0; num < 100; num++) {
    if (num % 2 === 0) {
        somaPares += num;
    } else {
        somaImpares += num;
    }
}

console.log(`Soma dos números pares: ${somaPares}`);
console.log(`Soma dos números ímpares: ${somaImpares}`);
