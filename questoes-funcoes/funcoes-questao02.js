function contarVogaisEConsoantes(frase) {
    let vogais = 0;
    let consoantes = 0;
    const vogalRegex = /[aeiouáéíóúãõâêîôûàèìòùäëïöü]/i;

    for (let char of frase) {
        if (vogalRegex.test(char)) {
            vogais++;
        } else if (/[bcdfghjklmnpqrstvwxyz]/i.test(char)) {
            consoantes++;
        }
    }

    return { vogais, consoantes };
}

console.log(contarVogaisEConsoantes("Olá, mundo!")); 
