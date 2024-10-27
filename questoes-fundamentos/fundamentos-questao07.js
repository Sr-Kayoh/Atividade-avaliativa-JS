const modificarFrase = (frase) => {
    return frase.split(' ').map(palavra => {
      if (palavra.length < 5) {
        return palavra.toUpperCase();
      } else {
        return palavra.toLowerCase();
      }
    }).join(' ');
  };
  
  console.log(modificarFrase("Eu amo programar em JavaScript"));
  
  