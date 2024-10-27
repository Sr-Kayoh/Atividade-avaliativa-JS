const somaTamanhosPalavras = (frase) => {
    return frase.split(' ').reduce((soma, palavra) => soma + palavra.length, 0);
  };
  
  console.log(somaTamanhosPalavras("Olá, como você está?"));

  