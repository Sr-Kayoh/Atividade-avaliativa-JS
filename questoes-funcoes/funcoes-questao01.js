function inverterNumero(numero) {
    let numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));
    return numeroInvertido;

}

console.log(inverterNumero(12356));  
