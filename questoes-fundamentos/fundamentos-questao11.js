const ultimosElementos = (lista, n) => {
    return lista.slice(-n);
  };

  const numeros = [10, 58, 68, 88, 25, 45];
  console.log(ultimosElementos(numeros, 3));
