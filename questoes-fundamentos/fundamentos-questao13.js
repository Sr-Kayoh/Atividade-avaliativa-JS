const somaCubos = (lista) => {
    return lista.reduce((soma, num) => soma + Math.pow(num, 3), 0);
  };
  
  const numerosParaElevar = [1, 2, 3];
  console.log(somaCubos(numerosParaElevar));
  