function maiorEMenor(lista) {
    let maior = Math.max(...lista);
    let menor = Math.min(...lista);
    return { maior, menor };
}


console.log(maiorEMenor([12, 45, 7, 89, 34, 23, 67, 10, 15, 99]));  
