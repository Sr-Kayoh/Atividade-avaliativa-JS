const ordenarNumeros = (lista) => {
    return lista.sort((a, b) => a - b);
  };

  const numeros = [34, 12, 5, 78, 2, 45];

  console.log("Lista original:", numeros);
  console.log("Lista ordenada:", ordenarNumeros(numeros));
  