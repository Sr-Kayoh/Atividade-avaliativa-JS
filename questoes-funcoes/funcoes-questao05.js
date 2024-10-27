function maiorPalavra(frase) {
    let palavras = frase.split(' ');
    let maior = '';

    for (let palavra of palavras) {
        if (palavra.length > maior.length) {
            maior = palavra;
        }
    }

    return maior;
}

console.log(maiorPalavra("Aprender JavaScript é extremamente divertido"));  // Retornará "extremamente"
