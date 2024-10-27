function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(`O maior número é: ${num1}`);
    } else if (num2 > num1) {
        console.log(`O maior número é: ${num2}`);
    } else {
        console.log("Os números são iguais.");
    }
}

const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
compararNumeros(numero1, numero2);
